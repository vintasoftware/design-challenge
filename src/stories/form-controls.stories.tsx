import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

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
