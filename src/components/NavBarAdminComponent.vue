<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<template>
  <ul>
    <li><RouterLink :to="{ name:'patient'}">se-connecter</RouterLink></li>
    <li><RouterLink :to="{ name:'invoice'}">se-connecter</RouterLink></li>
  </ul>
</template>
