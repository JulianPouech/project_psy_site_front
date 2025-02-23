<script setup lang="ts">
import AdminComponent from '@/components/AdminComponent.vue';
import { onMounted } from 'vue';
const patients = ref<Array<Patient>>([])
onMounted(() => {

})
</script>
<template>
  <AdminComponent>
  <div>
    <h2>Patient</h2>
    <div>
      <h3>filter</h3>
      <span>add</span>
    </div>
    <ul>
      <template v-for="">

      </template>
    </ul>
  </div>
  </AdminComponent>
</template>
