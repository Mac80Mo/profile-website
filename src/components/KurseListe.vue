<template>
  <div>
    <h2 class="text-h5 mb-4">Kurse</h2>
    <v-list dense>
      <v-list-item v-for="(kurs, index) in kurse" :key="index">
        <v-list-item-title>{{ kurs }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const kurse = [
  'Python Masterkurs - Programmieren Starten GmbH 04.04.2024',
  'Basic CMD - Udemy 12.09.2024',
  'Basic PowerShell - Udemy 17.09.2024',
  'Basic HTML5 & CSS - Udemy 24.09.2024',
  'Bottcamp JavaScript - Udemy 05.11.2024',
  'Basic SQL Datenbanken - Udemy 19.12.2024',
  'Java Masterkurs - Programmieren Starten GmbH 17.12.2024',
  'Basic GIT - Udemy 27.12.2024',
  'Python Campus: 14 Tage zur eigenen KI - Udemy 30.01.2025',
  'Open-Source LLMs - Udemy 10.02.2025',
  'Basic Jira - Udemy 01.03.2025',
  'Basic React - Udemy 13.06.2025' 
]
</script>