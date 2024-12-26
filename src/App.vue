<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarCompoment.vue'
import Footer from './components/FooterCompoment.vue'
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer></Footer>
</template>


