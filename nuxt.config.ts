// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  routeRules: {
    '/projects': {redirect: '/projects/quanta'}
  },
  app: {
    baseURL: '',
    buildAssetsDir: 'assets'
  }
})