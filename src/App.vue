<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template class="app">
  <Navbar></Navbar>
  <RouterView/>
  <Footer></Footer>
</template>


