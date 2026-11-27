import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon, InfoIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta = {
  title: 'Componentes/Alert',
  component: Alert,
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <InfoIcon />
      <AlertTitle>Tudo certo</AlertTitle>
      <AlertDescription>Suas alterações foram salvas.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Algo deu errado</AlertTitle>
      <AlertDescription>Não foi possível salvar. Tente de novo.</AlertDescription>
    </Alert>
  ),
}
