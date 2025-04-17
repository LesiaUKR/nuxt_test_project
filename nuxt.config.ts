export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@nuxtjs/color-mode'],
    css: [
'~/assets/css/main.css',
    '~/assets/css/themes.css',
  ],
  app: {
    head: {
      title: 'Construction News & 3D Viewer',
      meta: [
        { name: 'description', content: 'Construction news and 3D visualization project' }
      ],
      script: []
    }
  },
 colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
})
