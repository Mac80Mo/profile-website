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
    variablesTheme: true,
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F0F0F0',
          primary: '#0D47A1',
          secondary: '#424242',
          surface: '#FFFFFF',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          primary: '#FF9800',
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
