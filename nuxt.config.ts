// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
    },
  },
  modules: ['nuxt-swiper', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          container: {
            center: true,
          },
          
          colors: {
            white: '#ffffff',
            black: '#000000',
            cyan: {
              500: '#2EA7AF',
              600: '#237d83',
            },
            orange: {
              500: '#E74A00'
            },
            lime: {
              500: '#BCF132'
            },
            blue: {
              800: '#001D85'
            },
            neutral: {
              500: '#747678'
            }
          }
        },
        
        screens: {
          xs: '360px',
          sm: '480px',
          md: '768px',
          lg: '982px',
          xl: '1360px',
        },
      },
    }
  }
})