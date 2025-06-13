<template>
  <v-card
    class="pa-4 profile-card"
    elevation="0"
    rounded="xl"
    style="background-color: transparent; box-shadow: none;"
  >
    <!-- Video mit animiertem Orbit-Effekt -->
    <div class="video-wrapper">
      <div class="pulse-background"></div>
      <video
        aria-label="Profilvideo"
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

    <!-- Name und Beschreibung mit Typewriter-Effekt -->
    <h1 class="text-h5 mb-2">{{ typedName }}</h1>
    <p class="text-body-1 mb-4">{{ typedDescription }}</p>

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
import { ref, onMounted, type Ref } from 'vue'

// Typewriter-Effekt Logik
const typedName = ref('')
const typedDescription = ref('')
const name = 'Marcus Moser'
const description = 'Aktuell: Umschüler zum Fachinformatiker Anwendungsentwicklung bis Januar 2026'

const typeText = (text: string, target: Ref<string>, speed: number): Promise<void> => {
  return new Promise((resolve) => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        target.value += text[currentIndex]
        currentIndex++
      } else {
        clearInterval(interval)
        resolve()
      }
    }, speed)
  })
}

onMounted(async () => {
  // Video Geschwindigkeit anpassen
  const video = document.querySelector('video')
  if (video) {
    video.playbackRate = 0.5
  }

  // Typewriter-Effekt starten
  await typeText(name, typedName, 150)
  await new Promise(resolve => setTimeout(resolve, 500))
  await typeText(description, typedDescription, 50)
})

// Education Toggle
const showEducation = ref(false)
const toggleEducation = () => (showEducation.value = !showEducation.value)

const education = [
  { year: '2023', title: 'IT-Vorbereitungskurse' },
  { year: '2024', title: 'Umschulung zum Fachinformatiker Anwendungsentwicklung' },
  { year: '2025', title: 'Praktikum im Entwickler-Team: Full-Stack' }
]
</script>

<style scoped>
/* Video-Styling */
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

.pulse-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  filter: blur(20px);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.0);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.3;
  }
}
</style>
