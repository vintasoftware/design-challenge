import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <Button variant="outline" size="icon" onClick={() => setDark((d) => !d)} aria-label="Alternar tema">
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
