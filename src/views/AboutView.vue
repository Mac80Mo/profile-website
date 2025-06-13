<template>
  <div style="position: relative; height: 350px;">
    <!-- Linker Button -->
    <v-btn
      icon
      @click="prevSlide"
      class="ma-2"
      style="position: absolute; left: -60px; top: 50%; transform: translateY(-50%);"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <!-- Card mit fester Größe -->
    <v-card
      class="pa-4"
      elevation="8"
      rounded="xl"
      style="min-height: 300px; height: 100%; display: flex; flex-direction: column;"
    >
      <div style="overflow-y: auto; max-height: 250px;">
        <component :is="cards[currentSlide].component" />
      </div>
    </v-card>


    <!-- Rechter Button -->
    <v-btn
      icon
      @click="nextSlide"
      class="ma-2"
      style="position: absolute; right: -60px; top: 50%; transform: translateY(-50%);"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>

  <!-- Dots Navigation -->
  <div class="text-center mt-4">
    <v-btn
      v-for="(card, index) in cards"
      :key="index"
      icon
      :color="currentSlide === index ? 'primary' : 'grey'"
      @click="currentSlide = index"
      variant="outlined"
      size="small"
      class="mx-1"
    >
      <v-icon>mdi-circle</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AboutIntro from '@/components/AboutIntro.vue'
import ZertifikateListe from '@/components/ZertifikateListe.vue'
import KurseListe from '@/components/KurseListe.vue'

const currentSlide = ref(0)

const cards = [
  { title: 'Über mich', component: AboutIntro },
  { title: 'Kurse', component: KurseListe },
  { title: 'Zertifikate', component: ZertifikateListe }
]

const prevSlide = () => {
  currentSlide.value = (currentSlide.value + cards.length - 1) % cards.length
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % cards.length
}
</script>
