import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Componentes/Layout',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AccordionStory: Story = {
  name: 'Accordion',
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Como funciona o período de teste?</AccordionTrigger>
        <AccordionContent>São 14 dias com todos os recursos liberados.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Posso cancelar quando quiser?</AccordionTrigger>
        <AccordionContent>Sim, sem multa. O acesso segue até o fim do ciclo pago.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Vocês emitem nota fiscal?</AccordionTrigger>
        <AccordionContent>Sim, a nota chega por e-mail todo mês.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const CollapsibleStory: Story = {
  name: 'Collapsible',
  render: () => (
    <Collapsible className="flex w-72 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">3 arquivos anexados</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Mostrar arquivos">
            <ChevronsUpDownIcon />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">proposta.pdf</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">cronograma.xlsx</div>
        <div className="rounded-md border px-4 py-2 text-sm">contrato.docx</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

const tags = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`)

export const ScrollAreaStory: Story = {
  name: 'Scroll Area',
  render: () => (
    <ScrollArea className="h-60 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium">Lista longa</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
