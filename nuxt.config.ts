// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  routeRules: {
    '/projects': {redirect: '/projects/resume_website'}
  },
  app: {
    baseURL: '/sara_stec_resume_website/',
    buildAssetsDir: 'assets'
  }
})