<template>
  <v-app>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Content -->
    <v-main class="pt-16 pb-12">
      <v-container class="pa-4" style="max-width: 1200px;" fluid>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-snackbar 
      v-model="showSnackbar" 
      timeout="3000" 
      color="primary"
      location="bottom end"
    >
    Seite befindet sich im Aufbau
    </v-snackbar>


    <!-- Footer -->
    <FooterBar />
  </v-app>
</template>

<script setup lang="ts">

import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showSnackbar = ref(false)

watch(() => route.path, () => {
  showSnackbar.value = true
})


</script>

<style scoped>
.v-main {
  min-height: calc(100vh - 128px); /* 64px oben + 64px unten */
}

</style>
