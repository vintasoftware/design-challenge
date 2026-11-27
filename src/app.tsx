import { ArrowLeftIcon, ArrowRightIcon, LayoutTemplateIcon } from 'lucide-react'
import { screens } from '@/app/screens'
import { ThemeToggle } from '@/app/theme-toggle'
import { useHashRoute } from '@/app/use-hash-route'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'

export function App() {
  const slug = useHashRoute()
  const screen = screens.find((s) => s.slug === slug)

  return (
    <>
      {screen ? <ScreenView Component={screen.Component} /> : <ScreenIndex />}
      <Toaster />
    </>
  )
}

function ScreenView({ Component }: { Component: React.ComponentType }) {
  return (
    <>
      <Component />
      <div className="fixed right-4 bottom-4 z-50 flex gap-2">
        <Button asChild variant="outline" size="sm" className="shadow-md">
          <a href="#/">
            <ArrowLeftIcon />
            Todas as telas
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </>
  )
}

function ScreenIndex() {
  return (
    <main className="mx-auto flex min-h-svh max-w-4xl flex-col gap-8 px-6 py-12">
      <header className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl tracking-tight">Telas</h1>
          <p className="text-muted-foreground">
            Cada arquivo em <code className="rounded bg-muted px-1.5 py-0.5 text-sm">src/screens/</code> aparece aqui
            automaticamente.
          </p>
        </div>
        <ThemeToggle />
      </header>

      {screens.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Nenhuma tela ainda</CardTitle>
            <CardDescription>Crie um arquivo .tsx em src/screens/ para começar.</CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {screens.map((s) => (
            <li key={s.slug}>
              <a href={`#/${s.slug}`} className="group block h-full rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                <Card className="h-full transition-colors group-hover:bg-accent">
                  <CardHeader>
                    <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <LayoutTemplateIcon className="size-4" />
                    </div>
                    <CardTitle className="flex items-center justify-between gap-2">
                      {s.title}
                      <ArrowRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </CardTitle>
                    {s.description ? <CardDescription>{s.description}</CardDescription> : null}
                  </CardHeader>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
