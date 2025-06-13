<template>
  <v-app class="d-flex flex-column fill-height">
    <!-- Navigation -->
    <NavBar />

    <!-- Page Content -->
    <v-main class="flex-grow-1">
      <v-container class="pa-4" style="max-width: 1200px;" fluid>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Snackbar -->
    <v-snackbar 
      v-model="showSnackbar" 
      timeout="5000" 
      color="primary"
      location="bottom end"
    >
      Seite befindet sich im Aufbau
    </v-snackbar>

    <!-- Footer -->
    <FooterBar v-if="showFooter" />
  </v-app>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showSnackbar = ref(false)

const blockedRoutes = ['/about']

const showFooter = computed(() => !blockedRoutes.includes(route.path))

onMounted(() => {
  showSnackbar.value = true
})
</script>

<style scoped>
.v-main {
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
