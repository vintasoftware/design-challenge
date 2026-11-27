import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Fundamentos',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const colors = [
  ['background', 'foreground'],
  ['card', 'card-foreground'],
  ['popover', 'popover-foreground'],
  ['primary', 'primary-foreground'],
  ['secondary', 'secondary-foreground'],
  ['muted', 'muted-foreground'],
  ['accent', 'accent-foreground'],
  ['destructive', null],
  ['border', null],
  ['input', null],
  ['ring', null],
  ['chart-1', null],
  ['chart-2', null],
  ['chart-3', null],
  ['chart-4', null],
  ['chart-5', null],
] as const

export const Cores: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {colors.map(([bg, fg]) => (
        <div key={bg} className="overflow-hidden rounded-lg border">
          <div
            className="flex h-20 items-end p-3 font-medium text-sm"
            style={{ background: `var(--${bg})`, color: fg ? `var(--${fg})` : undefined }}
          >
            {fg ? 'Aa' : null}
          </div>
          <div className="space-y-0.5 p-3 text-xs">
            <div className="font-medium">{bg}</div>
            {fg ? <div className="text-muted-foreground">{fg}</div> : null}
          </div>
        </div>
      ))}
    </div>
  ),
}

const typeScale = [
  ['text-4xl font-semibold tracking-tight', 'Título de página'],
  ['text-3xl font-semibold tracking-tight', 'Título de seção'],
  ['text-2xl font-semibold', 'Título'],
  ['text-xl font-semibold', 'Subtítulo'],
  ['text-lg font-medium', 'Destaque'],
  ['text-base', 'Texto padrão do corpo'],
  ['text-sm', 'Texto pequeno, usado em formulários e tabelas'],
  ['text-sm text-muted-foreground', 'Texto de apoio'],
  ['text-xs text-muted-foreground', 'Legenda'],
] as const

export const Tipografia: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      {typeScale.map(([cls, label]) => (
        <div key={cls} className="flex flex-col gap-1">
          <code className="text-muted-foreground text-xs">{cls}</code>
          <span className={cls}>{label}</span>
        </div>
      ))}
    </div>
  ),
}

const radii = ['rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-full'] as const

export const Raio: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {radii.map((r) => (
        <div key={r} className="flex flex-col items-center gap-2">
          <div className={`size-20 border-2 border-primary bg-muted ${r}`} />
          <code className="text-xs">{r}</code>
        </div>
      ))}
    </div>
  ),
}

const spacing = [1, 2, 3, 4, 6, 8, 12, 16] as const

export const Espacamento: Story = {
  name: 'Espaçamento',
  render: () => (
    <div className="flex flex-col gap-3">
      {spacing.map((s) => (
        <div key={s} className="flex items-center gap-4">
          <code className="w-12 text-xs">{s}</code>
          <div className="h-4 rounded-sm bg-primary" style={{ width: `calc(var(--spacing) * ${s})` }} />
          <span className="text-muted-foreground text-xs">{s * 4}px</span>
        </div>
      ))}
    </div>
  ),
}
