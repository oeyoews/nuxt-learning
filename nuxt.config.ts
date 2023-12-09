// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  telemetry: false,
  debug: true,
  app: {
    // pageTransition: { name: 'fade', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  vite: {
    esbuild: {
      drop: ['debugger'],
      pure: [
        'console.log',
        // 'console.error',
        // 'console.warn',
        // 'console.debug',
        // 'console.trace',
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
