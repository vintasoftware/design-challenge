import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const meta = {
  title: 'Componentes/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Título do card</CardTitle>
        <CardDescription>Uma descrição curta.</CardDescription>
        <CardAction>
          <Button variant="link" size="sm">
            Ver tudo
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm">Conteúdo do card.</CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Confirmar</Button>
        <Button size="sm" variant="outline">
          Cancelar
        </Button>
      </CardFooter>
    </Card>
  ),
}
