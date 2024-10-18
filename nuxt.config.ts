export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@nuxtjs/tailwindcss'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-10-18',
})