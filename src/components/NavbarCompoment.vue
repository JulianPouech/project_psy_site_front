<script setup lang="ts">
  import '../assets/navbar.css'
  import { RouterLink } from 'vue-router';

</script>
<template>
  <nav>
    <ul>
      <li><RouterLink class="logo" :to="{ name:'home' }"><img alt="Logo du site" src="../../public/placeholder/logo.png" height="56px"></RouterLink></li>
    </ul>
    <ul>
      <! todo add route !>
    </ul>
  </nav>
</template>

