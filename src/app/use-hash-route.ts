import { useEffect, useState } from 'react'

/** Reads the screen slug from the URL hash: #/minha-tela -> "minha-tela". */
export function useHashRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '')
  const [slug, setSlug] = useState(read)

  useEffect(() => {
    const onChange = () => {
      setSlug(read())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return slug
}
