<template>
  <v-card class="pa-4 profile-card" elevation="8" rounded="xl">
    <!-- Video mit animiertem Orbit-Effekt -->
    <div class="video-wrapper">
      <div class="orbit-dot"></div>
      <video
        autoplay
        muted
        loop
        playsinline
        width="150"
        height="150"
        class="profile-video"
      >
        <source src="/profilvideo.mp4" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>
    </div>

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
import { ref, onMounted } from 'vue'

onMounted(() => {
  const video = document.querySelector('video')
  if (video) {
    video.playbackRate = 0.75 // langsamere Wiedergabe
  }
})

const name = 'Marcus Moser'
const description =
  'Aktuell: Umschüler zum Fachinformatiker Anwendungsentwicklung bis Januar 2026'

const showEducation = ref(false)
const toggleEducation = () => (showEducation.value = !showEducation.value)

const education = [
  { year: '2023', title: 'IT-Vorbereitungskurse' },
  { year: '2024', title: 'Umschulung zum Fachinformatiker Anwendungsentwicklung' },
  { year: '2025', title: 'Praktikum im Entwickler-Team: Full-Stack' }
]
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem auto;
}

.profile-video {
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
}
</style>
