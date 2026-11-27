import type { Meta, StoryObj } from '@storybook/react-vite'
import { FolderIcon } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'Componentes/Feedback',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AlertDialogStory: Story = {
  name: 'Alert Dialog',
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Sair sem salvar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Descartar alterações?</AlertDialogTitle>
          <AlertDialogDescription>
            Você tem alterações que ainda não foram salvas. Se sair agora, elas serão perdidas.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Continuar editando</AlertDialogCancel>
          <AlertDialogAction>Descartar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const EmptyStory: Story = {
  name: 'Empty',
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>Nenhum projeto ainda</EmptyTitle>
        <EmptyDescription>Crie seu primeiro projeto para começar.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Criar projeto</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const SpinnerStory: Story = {
  name: 'Spinner',
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Button disabled>
        <Spinner />
        Salvando...
      </Button>
    </div>
  ),
}
