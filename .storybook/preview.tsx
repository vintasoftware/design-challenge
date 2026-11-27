import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: { order: ['Introdução', 'Fundamentos', 'Componentes'] },
    },
  },
  globalTypes: {
    theme: {
      description: 'Tema claro ou escuro',
      toolbar: {
        title: 'Tema',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Claro' },
          { value: 'dark', title: 'Escuro' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme
      useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
      }, [theme])
      return <Story />
    },
  ],
}

export default preview
