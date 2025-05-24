<template>
  <v-footer app color="primary" dark>
    <v-container class="text-center">
      <!-- Lauftext oben -->
      <div class="ticker mb-2">
        <span class="ticker-text">Aktuell: Portfolio Seite im Aufbau. Umsetzung mit TypeScript und Vue</span>
      </div>

      <!-- Impressum -->
      <p class="mb-0">© 2025 Marcus Moser - <RouterLink to="/impressum" class="text-black text-decoration-none">Impressum</RouterLink></p>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// keine Logik notwendig
</script>

<style scoped>

.ticker {
  overflow: hidden;
  white-space: nowrap;
  background-color: var(--v-theme-primary);
  color: black;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 0.875rem;
  position: relative;
}

.ticker-text {
  display: inline-block;
  padding-left: 100%;
  animation: scroll-left 15s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
