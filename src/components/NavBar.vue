<template>
  <div>
    <!-- Drawer Menü -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="primary"
      dark
      @mouseleave="drawer = false"
    >
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          v-bind="item.external
            ? { href: item.href, target: '_blank', rel: 'noopener' }
            : { to: item.to }"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Obere App Bar -->
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" aria-label="Menü öffnen" />

      <v-toolbar-title class="ml-2">{{ pageTitle }}</v-toolbar-title>

      <v-spacer />

      <!-- Dark/Light-Mode Toggle -->
      <v-tooltip location="bottom">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            @click="toggleTheme"
            icon
            variant="text"
            :color="isDark ? 'black' : 'white'"
            aria-label="Hell-/Deunkelmodus umschalten"
          >
            <v-icon>
              {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
            </v-icon>
          </v-btn>
        </template>
        <span>
          {{ isDark ? 'Wechsle zu Light Mode' : 'Wechsle zu Dark Mode' }}
        </span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useRoute } from 'vue-router'

const drawer = ref(false)

const navItems = [
  { title: 'Startseite', to: '/', icon: 'mdi-home' },
  { title: 'Über mich', to: '/about', icon: 'mdi-information' },
  { title: 'Impressum', to: '/impressum', icon: 'mdi-file-document' },
  { title: 'Projekte', external: true, href: 'https://github.com/Mac80Mo', icon: 'mdi-github' }
]

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

const route = useRoute()

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/': 'Startseite',
    '/about': 'Über mich',
    '/impressum': 'Impressum'
  }
  return titles[route.path] || 'Seite'
})

</script>
