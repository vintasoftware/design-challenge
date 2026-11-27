import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const meta = {
  title: 'Componentes/Exibição de dados',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TableStory: Story = {
  name: 'Table',
  render: () => (
    <Table className="w-[480px]">
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Função</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ana Souza</TableCell>
          <TableCell>Design</TableCell>
          <TableCell className="text-right">
            <Badge>Ativo</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bruno Lima</TableCell>
          <TableCell>Produto</TableCell>
          <TableCell className="text-right">
            <Badge variant="outline">Convidado</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const TabsStory: Story = {
  name: 'Tabs',
  render: () => (
    <Tabs defaultValue="geral" className="w-96">
      <TabsList>
        <TabsTrigger value="geral">Geral</TabsTrigger>
        <TabsTrigger value="membros">Membros</TabsTrigger>
        <TabsTrigger value="cobranca">Cobrança</TabsTrigger>
      </TabsList>
      <TabsContent value="geral" className="text-sm">
        Configurações gerais.
      </TabsContent>
      <TabsContent value="membros" className="text-sm">
        Quem faz parte do time.
      </TabsContent>
      <TabsContent value="cobranca" className="text-sm">
        Plano e pagamentos.
      </TabsContent>
    </Tabs>
  ),
}

export const AvatarStory: Story = {
  name: 'Avatar',
  render: () => (
    <div className="flex gap-2">
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const ProgressStory: Story = {
  name: 'Progress',
  render: () => <Progress value={60} className="w-72" />,
}

export const SkeletonStory: Story = {
  name: 'Skeleton',
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  ),
}
