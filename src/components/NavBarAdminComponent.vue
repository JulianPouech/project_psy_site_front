<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<template>
  <nav>
    <ul>
      <li><RouterLink :to="{ name:'admin'}">Dash board</RouterLink></li>
      <li><RouterLink :to="{ name:'admin-patient'}">patient</RouterLink></li>
    </ul>
  </nav>
</template>
