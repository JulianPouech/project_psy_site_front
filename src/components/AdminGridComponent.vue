<script setup lang="ts">
import AdminComponent from './AdminComponent.vue';


</script>
<template>
  <AdminComponent>
    <div class="">
      <slot name="title">y'all gotta see this</slot>
      <slot name="filter"></slot>
      <slot name="grids" class="grids"><></slot>
    </div>
  </AdminComponent>
</template>
