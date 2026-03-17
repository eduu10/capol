import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Client } from "basic-ftp";
import { Readable, Writable } from "stream";
import { z } from "zod";
import fs from "fs";
import path from "path";

const FTP_CONFIG = {
  host: "108.167.168.53",
  port: 21,
  user: "tylerduuu@capol.com.br",
  password: "cwprW9*XXQ3Z",
  secure: false,
};

async function withFtp(fn) {
  const client = new Client();
  client.ftp.verbose = false;
  try {
    await client.access(FTP_CONFIG);
    return await fn(client);
  } finally {
    client.close();
  }
}

const server = new McpServer({
  name: "capol-ftp",
  version: "1.0.0",
});

// Tool: Test connection
server.tool("ftp_test", "Testa a conexão FTP com o servidor capol.com.br", {}, async () => {
  try {
    const result = await withFtp(async (client) => {
      const list = await client.list("/");
      return `Conectado com sucesso a ftp.capol.com.br!\nArquivos na raiz: ${list.length}\n${list.map((f) => `  ${f.type === 2 ? "[DIR]" : "[FILE]"} ${f.name} (${f.size} bytes)`).join("\n")}`;
    });
    return { content: [{ type: "text", text: result }] };
  } catch (err) {
    return { content: [{ type: "text", text: `Erro ao conectar: ${err.message}` }], isError: true };
  }
});

// Tool: List files
server.tool(
  "ftp_list",
  "Lista arquivos e pastas em um diretório do FTP",
  { path: z.string().default("/").describe("Caminho do diretório") },
  async ({ path: ftpPath }) => {
    try {
      const result = await withFtp(async (client) => {
        const list = await client.list(ftpPath);
        if (list.length === 0) return `Diretório ${ftpPath} está vazio.`;
        return list
          .map((f) => {
            const type = f.type === 2 ? "[DIR] " : "[FILE]";
            const size = f.type === 2 ? "" : ` (${formatSize(f.size)})`;
            return `${type} ${f.name}${size}`;
          })
          .join("\n");
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro: ${err.message}` }], isError: true };
    }
  }
);

// Tool: Upload file
server.tool(
  "ftp_upload",
  "Faz upload de um arquivo local para o servidor FTP",
  {
    local_path: z.string().describe("Caminho local do arquivo"),
    remote_path: z.string().describe("Caminho remoto no FTP (ex: /public_html/arquivo.txt)"),
  },
  async ({ local_path, remote_path }) => {
    try {
      if (!fs.existsSync(local_path)) {
        return { content: [{ type: "text", text: `Arquivo local não encontrado: ${local_path}` }], isError: true };
      }
      const result = await withFtp(async (client) => {
        const response = await client.uploadFrom(local_path, remote_path);
        const stats = fs.statSync(local_path);
        return `Upload concluído!\n  Local: ${local_path}\n  Remoto: ${remote_path}\n  Tamanho: ${formatSize(stats.size)}`;
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro no upload: ${err.message}` }], isError: true };
    }
  }
);

// Tool: Upload directory
server.tool(
  "ftp_upload_dir",
  "Faz upload de uma pasta inteira para o servidor FTP (recursivo)",
  {
    local_dir: z.string().describe("Caminho local da pasta"),
    remote_dir: z.string().describe("Caminho remoto no FTP (ex: /public_html/)"),
  },
  async ({ local_dir, remote_dir }) => {
    try {
      if (!fs.existsSync(local_dir)) {
        return { content: [{ type: "text", text: `Pasta local não encontrada: ${local_dir}` }], isError: true };
      }
      const result = await withFtp(async (client) => {
        await client.ensureDir(remote_dir);
        await client.uploadFromDir(local_dir, remote_dir);
        return `Upload da pasta concluído!\n  Local: ${local_dir}\n  Remoto: ${remote_dir}`;
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro no upload: ${err.message}` }], isError: true };
    }
  }
);

// Tool: Download file
server.tool(
  "ftp_download",
  "Baixa um arquivo do servidor FTP para o local",
  {
    remote_path: z.string().describe("Caminho remoto no FTP"),
    local_path: z.string().describe("Caminho local para salvar"),
  },
  async ({ remote_path, local_path }) => {
    try {
      const dir = path.dirname(local_path);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const result = await withFtp(async (client) => {
        await client.downloadTo(local_path, remote_path);
        const stats = fs.statSync(local_path);
        return `Download concluído!\n  Remoto: ${remote_path}\n  Local: ${local_path}\n  Tamanho: ${formatSize(stats.size)}`;
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro no download: ${err.message}` }], isError: true };
    }
  }
);

// Tool: Delete file
server.tool(
  "ftp_delete",
  "Remove um arquivo do servidor FTP",
  { remote_path: z.string().describe("Caminho remoto do arquivo a deletar") },
  async ({ remote_path }) => {
    try {
      const result = await withFtp(async (client) => {
        await client.remove(remote_path);
        return `Arquivo deletado: ${remote_path}`;
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro ao deletar: ${err.message}` }], isError: true };
    }
  }
);

// Tool: Create directory
server.tool(
  "ftp_mkdir",
  "Cria um diretório no servidor FTP",
  { remote_path: z.string().describe("Caminho do diretório a criar") },
  async ({ remote_path }) => {
    try {
      const result = await withFtp(async (client) => {
        await client.ensureDir(remote_path);
        return `Diretório criado: ${remote_path}`;
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro: ${err.message}` }], isError: true };
    }
  }
);

// Tool: Read text file
server.tool(
  "ftp_read",
  "Lê o conteúdo de um arquivo de texto do servidor FTP",
  { remote_path: z.string().describe("Caminho remoto do arquivo") },
  async ({ remote_path }) => {
    try {
      const result = await withFtp(async (client) => {
        const chunks = [];
        const writable = new Writable({
          write(chunk, encoding, callback) {
            chunks.push(chunk);
            callback();
          },
        });
        await client.downloadTo(writable, remote_path);
        return Buffer.concat(chunks).toString("utf-8");
      });
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Erro ao ler: ${err.message}` }], isError: true };
    }
  }
);

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const transport = new StdioServerTransport();
await server.connect(transport);
