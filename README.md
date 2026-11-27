# Design Challenge

Projeto base para você construir as telas do desafio. Ele já vem com:

- **React + Vite + TypeScript**, para montar as telas.
- **Tailwind CSS 4** e componentes do **[shadcn/ui](https://ui.shadcn.com)** com o tema neutro padrão.
- **Storybook**, com os componentes e os fundamentos (cores, tipografia, raio, espaçamento).

Nada aqui é obrigatório. Mude o tema, edite componentes, crie novos. O projeto é só um ponto de partida.

## Como rodar

Você precisa de **Node 22+** e **pnpm**. Se não tiver o pnpm: `npm install -g pnpm` (ou `corepack enable`).

```bash
pnpm install
pnpm dev         # telas em http://localhost:5173
pnpm storybook   # design system em http://localhost:6006
```

## Onde estão as coisas

| Caminho | O que é |
|---|---|
| `src/screens/` | **Suas telas.** Cada arquivo `.tsx` aqui aparece na página inicial do `pnpm dev`. |
| `src/components/ui/` | Componentes do shadcn/ui. Pode editar à vontade. |
| `src/components/` | Lugar para os componentes que você criar. |
| `src/index.css` | Tokens do tema (cores, raio, fonte), no modo claro e escuro. |
| `src/stories/` | Páginas do Storybook. |

## Criando uma tela

Crie um arquivo em `src/screens/`, por exemplo `src/screens/minha-tela.tsx`:

```tsx
import type { ScreenMeta } from '@/app/screens'
import { Button } from '@/components/ui/button'

export const meta: ScreenMeta = {
  title: 'Minha tela',
  description: 'O que essa tela faz.',
  order: 1, // números menores aparecem primeiro
}

export default function MinhaTela() {
  return (
    <main className="p-8">
      <Button>Olá</Button>
    </main>
  )
}
```

Ela aparece na página inicial e fica em `http://localhost:5173/#/minha-tela`.
Para ligar uma tela na outra, use um link para `#/nome-do-arquivo`.

As telas `exemplo-login` e `exemplo-painel` são só exemplos. Pode apagar.

## Adicionando componentes

Este projeto já inclui os componentes mais comuns. Precisa de outro? Veja a lista em
[ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components) e rode:

```bash
pnpm dlx shadcn@latest add <nome-do-componente>
```

## Mudando o visual

Os componentes usam cores semânticas (`bg-primary`, `text-muted-foreground`, `border-border`...).
Os valores ficam em `src/index.css`: troque ali e todos os componentes mudam juntos.
O botão de lua/sol nas telas (e o botão **Tema** no Storybook) alterna entre claro e escuro.

## Comandos

```bash
pnpm dev              # telas
pnpm storybook        # Storybook
pnpm typecheck        # checa os tipos do TypeScript
pnpm build            # gera a versão final das telas em dist/
pnpm build-storybook  # gera o Storybook estático em storybook-static/
```

Use apenas dados inventados nas telas.
