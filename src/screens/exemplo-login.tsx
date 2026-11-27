import { toast } from 'sonner'
import type { ScreenMeta } from '@/app/screens'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export const meta: ScreenMeta = {
  title: 'Exemplo: Login',
  description: 'Uma tela simples com formulário. Pode apagar quando quiser.',
  order: 900,
}

export default function ExemploLogin() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Use seu e-mail e senha para acessar sua conta.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="login"
            onSubmit={(e) => {
              e.preventDefault()
              toast.success('Login feito (de mentirinha).')
            }}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input id="email" type="email" placeholder="voce@exemplo.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Senha</FieldLabel>
                <Input id="password" type="password" required />
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="remember" />
                <FieldLabel htmlFor="remember" className="font-normal">
                  Manter conectado
                </FieldLabel>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="login" className="w-full">
            Entrar
          </Button>
          <Button variant="link" size="sm">
            Esqueci minha senha
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
