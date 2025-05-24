<template>
  <div>
    <h2 class="text-h5 mb-4">Zertifikate</h2>
    <v-list dense>
      <v-list-item v-for="(item, index) in zertifikate" :key="index">
        <v-list-item-icon>
          <v-icon color="success">mdi-checkbox-marked</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const zertifikate = [
  'HTML/CSS Zertifikat (WBS)',
  'JavaScript Basiszertifikat',
  'Scrum Grundlagen (2024)'
]
</script>