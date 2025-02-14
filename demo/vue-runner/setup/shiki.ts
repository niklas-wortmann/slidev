import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    // Explicitly Vue for Monaco Highlighting
    langs: [
      'ts',
      'js',
      'vue',
      'html',
    ],
  }
})
