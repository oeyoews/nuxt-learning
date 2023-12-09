// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  debug: true,
  app: {
    // pageTransition: { name: 'fade', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
