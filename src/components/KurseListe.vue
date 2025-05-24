<template>
  <div>
    <h2 class="text-h5 mb-4">Kurse</h2>
    <v-list dense>
      <v-list-item v-for="(kurs, index) in kurse" :key="index">
        <v-list-item-icon>
          <v-icon color="success">mdi-play-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ kurs }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const kurse = [
  'TypeScript Grundlagen',
  'Vue 3 mit Composition API',
  'Datenbanken mit PostgreSQL'
]
</script>