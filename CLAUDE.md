# Capol - Site Institucional

## Sobre o Projeto
Recriação do site **capol.com.br** (Capol - nutrição animal) como aplicação Next.js 14 com design pixel-perfect baseado no site original.

## Estrutura do Projeto
```
capol/
├── site/                    # Aplicação Next.js 14
│   ├── src/
│   │   ├── app/
│   │   │   ├── (site)/      # Páginas públicas (Home, Produtos, Contato, etc.)
│   │   │   ├── (admin)/     # Dashboard administrativo (/admin)
│   │   │   └── layout.tsx   # Root layout (Raleway + Lato fonts)
│   │   ├── components/      # Componentes reutilizáveis (Header, Footer, BannerSlider, etc.)
│   │   ├── contexts/        # SiteConfigContext, AnalyticsContext
│   │   └── data/            # Dados estáticos (products.ts, blog.ts, galleries.ts)
│   ├── public/
│   │   └── imagens/         # Imagens do site (backup do original)
│   └── package.json
├── imagens/                 # Backup original das imagens
├── paginas/                 # Backup HTML das páginas originais
└── INDICE-BACKUP.md         # Índice do backup
```

## Stack Técnica
- **Framework**: Next.js 14 (App Router)
- **Estilo**: Tailwind CSS
- **Linguagem**: TypeScript (strict)
- **Fontes**: Raleway (headings) + Lato (body) via next/font/google
- **Imagens**: Next.js Image component com `fill` prop
- **Analytics**: localStorage-based tracking
- **Admin**: Dashboard com gráficos e configurações em tempo real

## Comandos
```bash
cd site && npm run dev     # Dev server (porta 3000)
cd site && npm run build   # Build de produção
cd site && npx next build --no-lint  # Build sem lint
```

## Padrões de Design
- **Páginas de produto**: Banner verde (`bg-[#2e7d32]`) com título + breadcrumb
- **Outras páginas**: Banner cinza (`bg-gray-100 border-b-4 border-[#2e7d32]`) com título + breadcrumb
- **Sidebar de categorias**: Sempre à esquerda com formato `> NomeCategoria`
- **Grid de produtos**: Imagem + nome centralizado, sem botões de ação
- **Cor principal**: Verde `#2e7d32`

## Páginas Implementadas
- `/` - Home (banner slider, produtos, galerias, blog)
- `/produtos` - Listagem de todos os produtos
- `/categoria/[slug]` - Produtos filtrados por categoria
- `/produto/[slug]` - Detalhe do produto com composição
- `/quem-somos` - Sobre a empresa
- `/blog` - Listagem de posts
- `/blog/[slug]` - Post individual
- `/galerias` - Listagem de galerias de fotos
- `/galeria/[id]` - Galeria individual com lightbox
- `/contato` - Formulário + mapas (Matriz e Filial)
- `/carrinho` - Orçamento
- `/admin` - Dashboard administrativo

## Notas Importantes
- As imagens dos produtos já incluem o path completo (`/imagens/produtos/...`) nos dados - NÃO adicionar prefixo extra
- O preview server usa configuração especial no `.claude/launch.json` com node + npm-cli.js
- Build deve ser executado com `--no-lint` para evitar erros de lint não-críticos
