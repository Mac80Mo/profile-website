<template>
  <v-container class="pa-4" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="8" rounded="xl">
          <!-- Dark/Light-Mode Toggle -->
          <v-btn @click="toggleTheme" color="secondary" class="mb-4">
            {{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
          </v-btn>

          <!-- Profilbild -->
          <v-img
            src="/profilbild.jpeg"
            alt="Profilbild"
            width="150"
            height="150"
            class="mx-auto mb-4"
            cover
            style="border-radius: 50%"
          />

          <!-- Name und Beschreibung -->
          <h1 class="text-h5 mb-2">{{ name }}</h1>
          <p class="text-body-1 mb-4">{{ description }}</p>

          <!-- Bildung anzeigen -->
          <v-btn @click="toggleEducation" color="primary">
            {{ showEducation ? 'Bildung ausblenden' : 'Bildung anzeigen' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showEducation" class="mt-3">
              <v-list>
                <v-list-item v-for="item in education" :key="item.year">
                  <v-list-item-content>
                    <v-list-item-title>
                      <strong>{{ item.year }}:</strong> {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

// Persönliche Infos
const name = 'Marcus Moser'
const description = 'Umschüler zum Fachinformatiker Anwendungsentwicklung'

// Bildung
const showEducation = ref(false)
const toggleEducation = () => (showEducation.value = !showEducation.value)

const education = [
  { year: '2012', title: 'Realschulabschluss' },
  { year: '2015', title: 'Fachabitur Technik' },
  { year: '2021', title: 'Bachelor Informatik' }
]

// Dark/Light-Mode Umschaltung
const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>
