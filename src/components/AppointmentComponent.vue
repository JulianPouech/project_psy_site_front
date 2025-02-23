<script setup lang="ts">
  defineProps<{
    name?:string,
    appointmentAt?:String,
  }>();
</script>

<template>
  <li>
    <p>{{name}}</p>
    <p>{{appointmentAt}}</p>
  </li>
</template>
