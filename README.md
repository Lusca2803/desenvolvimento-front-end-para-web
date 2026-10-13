# Desenvolvimento Front-End para Web

Repositório da disciplina de **Desenvolvimento Front-End para Web**, com os exercícios, exemplos e mini projetos feitos durante as aulas. O conteúdo acompanha a evolução do aprendizado, começando por **tabelas e links em HTML** e chegando ao **layout com CSS (Flexbox)**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-green)

---

## Sobre o repositório

Cada pasta de aula é nomeada com a data no formato `dd-mm` e traz os arquivos produzidos naquele dia: páginas HTML, folhas de estilo CSS e as imagens usadas nos exemplos. Não há dependências, build ou gerenciador de pacotes: são apenas arquivos estáticos.

## Conteúdo por aula

| Data  | Pasta | Tópicos abordados |
|-------|-------|-------------------|
| 26/08 | [`Lucas/26-08`](Lucas/26-08) | Tabelas HTML: `table`, `th`, `tr`, `td`, `caption`, `colspan` e `rowspan`; estilização de tabelas com `border`, `border-collapse`, `padding` e `:nth-child` |
| 09/09 | [`Lucas/09-09`](Lucas/09-09) | Páginas de cardápio com **links entre páginas** (`<a>`), imagens como links, `alt`, `width`/`height` e centralização de conteúdo |
| 16/09 | [`Lucas/16-09`](Lucas/16-09) | Primeiros passos com **CSS externo**: seletores de tag, `id` e `class`, cores e tamanho de fonte |
| 23/09 | [`Lucas/23-09`](Lucas/23-09) | CSS aplicado a projetos: seletor universal, lista de seletores, múltiplas classes, **box model** (`padding`, `border`, `margin`), `box-sizing`, imagem responsiva e pseudo-classe `:hover` |
| 07/10 | [`Lucas/07-10`](Lucas/07-10) | Layout com `div` e **Flexbox** (`display: flex`, `flex: 1`) |

### Detalhamento dos projetos

- **`26-08`** — Exemplos de tabelas (`tabela`, `exemplocaption`, `exemplocolspan`, `exemplorowspan`, `exemploestilotabela`).
- **`09-09/exemplo 01`** — Cardápio com páginas individuais para cada prato (*Tradicional da Casa*, *Variado* e *Salada Tropical*) e links de volta ao menu.
- **`09-09/atividade 02`** — Cardápio do **Café Mineiro** com imagens clicáveis que levam à página de cada bebida (café, café arábico, cappuccino e chá chai). Inclui também uma variação, `restaurante02.html`, que ficou incompleta (referencia páginas e imagens que não estão no repositório).
- **`16-09/estilo1`** — Página de cardápio estilizada com CSS externo (`formatacao.css`).
- **`16-09/estilo2`** — Curso de CSS3: teste de seletores por `id`, `class` e tag.
- **`23-09/meu_projeto`** — Cardápio da casa, com o código HTML e CSS comentados passo a passo.
- **`23-09/mostra-tecnologia`** — Página de divulgação da *Mostra de Tecnologia 2026*, com caixa central, imagem responsiva e link âncora.
- **`07-10/meu-projeto`** — Página "Estudando div": cabeçalho e três cartões lado a lado com imagem e título, montados com Flexbox.
- **`exemplos`** — Cópia dos exemplos de tabelas, acrescida do arquivo `atividade.html` (desafio de tabela básica com produtos e preços).

## Estrutura de pastas

```text
desenvolvimento-front-end-para-web/
├── Lucas/
│   ├── 26-08/                 # Tabelas HTML
│   ├── 09-09/
│   │   ├── exemplo 01/        # Cardápio com links
│   │   └── atividade 02/      # Café Mineiro
│   ├── 16-09/
│   │   ├── estilo1/           # CSS externo (cardápio)
│   │   └── estilo2/           # Seletores: id, class e tag
│   ├── 23-09/
│   │   ├── meu_projeto/       # Cardápio da casa (box model, hover)
│   │   └── mostra-tecnologia/ # Página do evento
│   ├── 07-10/
│   │   └── meu-projeto/       # Layout com Flexbox
│   └── exemplos/              # Exemplos de tabelas e atividade
├── LICENSE
└── README.md
```

## Como visualizar os projetos

Não é preciso instalar nada.

1. Clone o repositório:

   ```bash
   git clone https://github.com/<seu-usuario>/desenvolvimento-front-end-para-web.git
   ```

2. Entre na pasta da aula desejada, por exemplo `Lucas/23-09/mostra-tecnologia`.
3. Abra o arquivo `index.html` (ou o `.html` do exercício) em qualquer navegador, com um duplo clique ou arrastando o arquivo para a janela do navegador.

> **Dica:** se você usa o VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração salva.

## Tecnologias e conceitos

- **HTML5**: estrutura semântica (`main`, `h1`–`h4`, `table`, `img`, `a`), links internos e entre páginas.
- **CSS3**: seletores, box model, cores, tipografia, imagens responsivas, pseudo-classes e Flexbox.

## Autor

**Lucas Henrique Roque Cruz**

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
