import { FolderIcon, HomeIcon, InboxIcon, PlusIcon, SettingsIcon, UsersIcon } from 'lucide-react'
import type { ScreenMeta } from '@/app/screens'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export const meta: ScreenMeta = {
  title: 'Exemplo: Painel',
  description: 'Layout com menu lateral, cards e tabela. Pode apagar quando quiser.',
  order: 901,
}

// Fake data. Everything in this repo is made up.
const stats = [
  { label: 'Projetos ativos', value: '12', change: '+2 este mês' },
  { label: 'Tarefas abertas', value: '48', change: '-5 esta semana' },
  { label: 'Concluídas', value: '230', change: '+18 esta semana' },
]

const tasks = [
  { title: 'Revisar proposta de layout', owner: 'Ana Souza', status: 'Em andamento' },
  { title: 'Atualizar textos da home', owner: 'Bruno Lima', status: 'A fazer' },
  { title: 'Testar fluxo de cadastro', owner: 'Carla Mendes', status: 'Concluída' },
  { title: 'Definir ícones do menu', owner: 'Diego Rocha', status: 'Em andamento' },
]

const statusVariant = {
  'A fazer': 'outline',
  'Em andamento': 'secondary',
  Concluída: 'default',
} as const

const nav = [
  { label: 'Início', icon: HomeIcon, active: true },
  { label: 'Caixa de entrada', icon: InboxIcon },
  { label: 'Projetos', icon: FolderIcon },
  { label: 'Equipe', icon: UsersIcon },
  { label: 'Configurações', icon: SettingsIcon },
]

export default function ExemploPainel() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="px-4 py-3 font-semibold">Acme</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton isActive={item.active}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="flex-row items-center gap-2 p-4">
          <Avatar className="size-8">
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <span className="text-sm">Ana Souza</span>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <h1 className="font-medium">Início</h1>
        </header>

        <div className="flex flex-col gap-6 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((s) => (
              <Card key={s.label}>
                <CardHeader>
                  <CardDescription>{s.label}</CardDescription>
                  <CardTitle className="text-3xl">{s.value}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">{s.change}</CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tarefas recentes</CardTitle>
              <CardDescription>O que a equipe está fazendo agora.</CardDescription>
              <CardAction>
                <Button size="sm">
                  <PlusIcon />
                  Nova tarefa
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tarefa</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((t) => (
                    <TableRow key={t.title}>
                      <TableCell className="font-medium">{t.title}</TableCell>
                      <TableCell>{t.owner}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={statusVariant[t.status as keyof typeof statusVariant]}>{t.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
