<template>
  <div>
    <h2 class="text-h5 mb-4">Zertifikate</h2>
    <v-list dense>
      <v-list-item v-for="(item, index) in zertifikate" :key="index">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const zertifikate = [
  'EXIN Agile Scrum Foundation 30.08.2024',
  'PCEP OpenEDG Python Institute 17.11.2024',
  'Python Masterkurs - Programmieren Starten GmbH 04.04.2024',
  'Java Masterkurs - Programmieren Starten GmbH 17.12.2024'
]
</script>