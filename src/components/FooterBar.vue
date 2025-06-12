<template>
  <v-footer app color="primary" dark>
    <v-container class="d-flex justify-center align-center">
      <!-- Profilbild -->
      <img
        src="/faviconBild.png"
        alt="Profilbild"
        width="24"
        height="24"
        class="mr-2"
        style="border-radius: 50%;"
      />
      <!-- Copyright -->
      <p class="mb-0">© {{ new Date().getFullYear() }}</p>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// keine Logik notwendig
</script>

<style scoped>
/* Optional: Abstand und optische Anpassung */
</style>
