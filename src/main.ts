import { createApp } from 'vue'
import App from './App.vue'

// Vuetify Setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Router
import router from './router'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          primary: '#1976D2',
          secondary: '#424242',
          surface: '#F5F5F5',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          primary: '#90CAF9',
          secondary: '#BDBDBD',
          surface: '#1E1E1E',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  }
})


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
