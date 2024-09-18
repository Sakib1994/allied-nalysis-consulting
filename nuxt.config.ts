// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  routeRules: {
    '/': { prerender: true },
    '/contact': { swr: 3600 },
    '/appintment': { swr: 3600 },
    '/faq': { prerender: true },
    '/service': { prerender: true }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode', '@samk-dev/nuxt-vcalendar'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    dataValue: "theme"
  },
  nitro: {
    preset:"vercel"
  }
})
