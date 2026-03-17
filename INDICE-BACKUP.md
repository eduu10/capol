# BACKUP COMPLETO - capol.com.br
**Data do backup:** 16/03/2026
**Site:** https://capol.com.br/
**Empresa:** Cooperativa Agropecuária de Oliveira - CAPOL (Fundada em 17/06/1959)

---

## Estrutura do Backup

```
capol/
├── INDICE-BACKUP.md              ← Este arquivo (índice geral)
├── urls-originais.md              ← Mapeamento URL original → arquivo local
│
├── paginas/                       ← Conteúdo textual de cada página
│   ├── home/
│   │   └── conteudo.md            ← Página inicial (banners, seções, horários)
│   ├── quem-somos/
│   │   └── conteudo.md            ← História, fundadores, diretoria
│   ├── sobre/
│   │   └── conteudo.md            ← Página sobre (mesma info de quem-somos)
│   ├── produtos/
│   │   ├── conteudo.md            ← Lista completa dos 48 produtos por categoria
│   │   ├── produtos-detalhes.md   ← Ficha técnica dos primeiros 12 produtos
│   │   └── todos-produtos-detalhes.md ← Ficha técnica de TODOS os 48 produtos
│   ├── categorias/
│   │   └── conteudo.md            ← 12 categorias com todos os produtos listados
│   ├── cafes/
│   │   └── conteudo.md            ← Página CAPOL Cafés (sustentabilidade, processamento)
│   ├── nutricao-animal/
│   │   └── conteudo.md            ← Nutrição animal - catálogo completo
│   ├── insumos/
│   │   └── conteudo.md            ← Parceiros e insumos agrícolas
│   ├── sementes/
│   │   └── conteudo.md            ← Informações sobre sementes
│   ├── loja/
│   │   └── conteudo.md            ← Sistema de orçamento/carrinho online
│   ├── unidades/
│   │   └── conteudo.md            ← Duas unidades (Oliveira e São Francisco de Paula)
│   ├── contato/
│   │   └── conteudo.md            ← Endereços, telefones, emails, formulário
│   ├── blog/
│   │   └── conteudo.md            ← 3 posts completos
│   └── galerias/
│       └── conteudo.md            ← 6 galerias com listagem de fotos
│
└── imagens/                       ← Todas as imagens do site (100+ arquivos)
    ├── logos/                     ← 2 arquivos (logo principal + variação)
    │   ├── logo-capol.png
    │   └── logo-capol-200x100.png
    ├── banners/                   ← 4 banners rotativos da home
    │   ├── banner_sementes_insumos_adubos.jpg
    │   ├── banner_do_plantio_ate_colheita.jpg
    │   ├── banner_facilidade_homem_campo.jpg
    │   └── banner_capol_cafes.jpg
    ├── blog/                      ← 6 imagens (3 destaque + 3 thumbnails)
    │   ├── banner_parceiros.jpg / p_banner_parceiros.jpg
    │   ├── banner_assistencia.jpg / p_banner_assistencia.jpg
    │   └── banner_saude.jpg / p_banner_saude.jpg
    ├── seguimentos/               ← 4 ícones de segmentos
    │   ├── aves.jpg
    │   ├── bovinos.jpg
    │   ├── equinos.jpg
    │   └── suinos.jpg
    ├── cafes/                     ← 2 fotos da seção cafés
    │   ├── qualidade-e-compromisso-min.jpg
    │   └── qualidade-e-compromisso-2-min.jpg
    ├── home-centro/               ← 2 banners centrais
    │   ├── banner-nutricao-animal.jpg
    │   └── banner-racao-balanceada.jpg
    ├── whatsapp/                  ← 3 botões WhatsApp
    │   ├── whatsapp-loja-fabrica-de-cafes.png
    │   ├── whatsapp-sao-capol-cafes.png
    │   └── whatsapp-oliveira.png
    ├── produtos/                  ← 49 imagens de todos os produtos
    │   ├── capol_saco_racao.jpg (CAPOL 20%)
    │   ├── 1550843776-capol_saco_racao.jpg
    │   ├── ... (49 imagens total)
    │   └── 1659717080-sacaria_03_racao.jpg
    ├── galeria-capas/             ← 6 capas das galerias
    │   ├── fabrica-de-racao.jpg
    │   ├── armazenagem.jpg
    │   ├── veiculos.jpg
    │   ├── beneficiamento.jpg
    │   ├── sao-francisco-de-paula.jpg
    │   └── capol-oliveira.jpg
    └── galeria/                   ← 31 fotos das galerias
        ├── fabrica-de-racao/      ← 7 fotos
        ├── armazenagem/           ← 6 fotos
        ├── veiculos/              ← 2 fotos
        ├── beneficiamento/        ← 2 fotos
        ├── sao-francisco-de-paula/ ← 10 fotos
        └── capol-oliveira/        ← 4 fotos
```

---

## Resumo das Páginas do Site

| Página | URL | Arquivo |
|--------|-----|---------|
| Home | / | paginas/home/conteudo.md |
| Quem Somos | /quem-somos | paginas/quem-somos/conteudo.md |
| Sobre | /sobre | paginas/sobre/conteudo.md |
| Produtos (48 total) | /produtos | paginas/produtos/conteudo.md |
| Detalhes Produtos | /produto/* | paginas/produtos/todos-produtos-detalhes.md |
| Categorias (12) | /categoria/* | paginas/categorias/conteudo.md |
| Capol Cafés | /capol-cafes | paginas/cafes/conteudo.md |
| Nutrição Animal | (via /produtos) | paginas/nutricao-animal/conteudo.md |
| Insumos | (via blog/parceiros) | paginas/insumos/conteudo.md |
| Sementes | (via parceiros) | paginas/sementes/conteudo.md |
| Loja/Orçamento | /carrinho | paginas/loja/conteudo.md |
| Unidades | /contato + galerias | paginas/unidades/conteudo.md |
| Contato | /contato | paginas/contato/conteudo.md |
| Blog | /blog | paginas/blog/conteudo.md |
| Galerias | /galerias | paginas/galerias/conteudo.md |

---

## Contagem de Arquivos

| Tipo | Quantidade |
|------|-----------|
| Imagens total | ~100+ arquivos |
| ├── Produtos | 49 imagens |
| ├── Galeria fotos | 31 fotos |
| ├── Galeria capas | 6 capas |
| ├── Banners | 4 banners |
| ├── Blog | 6 imagens |
| ├── Logos | 2 arquivos |
| ├── Seguimentos | 4 ícones |
| ├── Cafés | 2 fotos |
| ├── Home centro | 2 banners |
| └── WhatsApp | 3 botões |
| Páginas documentadas | 15 páginas |
| Produtos catalogados | 48 produtos em 12 categorias |
| Posts de blog | 3 posts completos |
| Galerias | 6 galerias (31 fotos) |

---

## Informações de Contato (Referência Rápida)

**Matriz:** Av. Maracanã, 336 | Bairro das Graças – Oliveira/MG | CEP: 35.540-000
**Filial:** Rua Padre Joaquim Cardoso, 1050 | Centro - São Francisco de Paula/MG | CEP: 35.543-000
**Telefone:** (37) 3331.4410
**Instagram:** @capol_oliveira

### WhatsApp
- Loja Fábrica de Cafés: (37) 9 8851-6781
- São Capol Cafés: (37) 9 9962-0986
- Oliveira: (37) 9 9902-1671

### Emails Principais
- fabricio@capol.com.br | comercial@capol.com.br | tida@capol.com.br
- adriana@capol.com.br | lucas@capol.com.br
- gerencia@capol.com.br | vendas@capol.com.br

---

## Categorias de Produtos (48 produtos total)

| # | Categoria | Qtd |
|---|-----------|-----|
| 1 | Aves | 3 |
| 2 | Bezerro | 2 |
| 3 | Corte | 6 |
| 4 | Equinos | 2 |
| 5 | Ingredientes | 3 |
| 6 | Leite | 10 |
| 7 | Leite - Linha Top CMBL | 3 |
| 8 | Novilha | 1 |
| 9 | Ovinos | 4 |
| 10 | Pré-Parto | 1 |
| 11 | Suínos | 1 |
| 12 | Suplementos Minerais | 12 |
| | **TOTAL** | **48** |

---

## Diretoria Atual

| Cargo | Nome |
|-------|------|
| Diretor Presidente | Rodolfo Ferreira Pacheco |
| Diretor Administrativo | Luiz Roberto Thielemann |
| Diretor Financeiro | Osório Rocha Avelar |

---

## Horário de Funcionamento
- **Segunda a Sexta:** 7:00 - 18:00
- **Sábado:** 7:00 - 12:00
- **Domingo:** Fechado
