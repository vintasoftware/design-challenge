import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoldIcon, CopyIcon, ItalicIcon, SearchIcon, UnderlineIcon } from 'lucide-react'
import { useState } from 'react'
import { ptBR } from 'react-day-picker/locale'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Componentes/Formulário',
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TextInput: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="name">Nome</FieldLabel>
      <Input id="name" placeholder="Seu nome" />
      <FieldDescription>Como você quer ser chamado.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field data-invalid>
      <FieldLabel htmlFor="email">E-mail</FieldLabel>
      <Input id="email" aria-invalid defaultValue="nome@" />
      <FieldError>Digite um e-mail válido.</FieldError>
    </Field>
  ),
}

export const TextareaField: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="bio">Sobre você</FieldLabel>
      <Textarea id="bio" placeholder="Conte um pouco..." />
    </Field>
  ),
}

export const SelectField: Story = {
  render: () => (
    <Field>
      <FieldLabel>Cargo</FieldLabel>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Escolha um cargo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="produto">Produto</SelectItem>
          <SelectItem value="engenharia">Engenharia</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  ),
}

export const Choices: Story = {
  render: () => (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Plano</FieldLegend>
        <RadioGroup defaultValue="mensal">
          <Field orientation="horizontal">
            <RadioGroupItem value="mensal" id="mensal" />
            <FieldLabel htmlFor="mensal" className="font-normal">
              Mensal
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="anual" id="anual" />
            <FieldLabel htmlFor="anual" className="font-normal">
              Anual
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <Field orientation="horizontal">
        <Checkbox id="terms" />
        <FieldLabel htmlFor="terms" className="font-normal">
          Aceito os termos de uso
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="news" />
        <FieldLabel htmlFor="news" className="font-normal">
          Receber novidades por e-mail
        </FieldLabel>
      </Field>
    </FieldGroup>
  ),
}

export const LabelStory: Story = {
  name: 'Label',
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="cidade">Cidade</Label>
      <Input id="cidade" placeholder="Recife" />
    </div>
  ),
}

export const InputGroupStory: Story = {
  name: 'Input Group',
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Buscar..." />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="meusite.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copiar">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const SliderStory: Story = {
  name: 'Slider',
  render: () => (
    <Field>
      <FieldLabel>Volume</FieldLabel>
      <Slider defaultValue={[40]} max={100} step={1} />
    </Field>
  ),
}

export const ToggleStory: Story = {
  name: 'Toggle',
  render: () => (
    <div className="flex gap-2">
      <Toggle aria-label="Negrito">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Itálico">
        <ItalicIcon />
      </Toggle>
    </div>
  ),
}

export const ToggleGroupStory: Story = {
  name: 'Toggle Group',
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Negrito">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Itálico">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Sublinhado">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

function CalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return <Calendar locale={ptBR} mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
}

export const CalendarStory: Story = {
  name: 'Calendar',
  render: () => <CalendarExample />,
}
