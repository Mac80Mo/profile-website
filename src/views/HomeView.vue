<template>
  <v-card class="pa-4" elevation="8" rounded="xl">
    <!-- Profilbild -->
    <v-img
      :src="currentImage"
      alt="Profilbild"
      width="150"
      height="150"
      class="mx-auto mb-4 image-fade"
      cover
      style="border-radius: 50%"
    />

    <!-- Name und Beschreibung -->
    <h1 class="text-h5 mb-2">{{ name }}</h1>
    <p class="text-body-1 mb-4">{{ description }}</p>

    <!-- Bildung anzeigen -->
    <v-btn @click="toggleEducation" color="primary">
      {{ showEducation ? 'Close' : 'Roadmap' }}
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
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = [
  '/profile-website/profilbild.jpeg',
  '/profile-website/profilbild2.jpeg'
]

const currentImage = ref(images[0])
let imageIndex = 0
let intervalId: number

onMounted(() => {
  intervalId = window.setInterval(() => {
    imageIndex = (imageIndex + 1) % images.length
    currentImage.value = images[imageIndex]
  }, 5000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

const name = 'Marcus Moser'
const description = 'Aktuell: Umschüler zum Fachinformatiker Anwendungsentwicklung'

const showEducation = ref(false)
const toggleEducation = () => (showEducation.value = !showEducation.value)

const education = [
  { year: '2023', title: 'IT-Vorbereitungskurse' },
  { year: '2024', title: 'Umschulung zum Fachinformatiker Anwendungsentwicklung' },
  { year: '2025', title: 'Praktikum im Entwickler-Team: Full-Stack' }
]
</script>

<style scoped>

.image-fade {
  transition: opacity 0.8s ease-in-out;
}

</style>
