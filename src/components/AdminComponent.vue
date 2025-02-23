<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';
import NavBarAdminComponent from './NavBarAdminComponent.vue';
import { Security } from '@/model/Security';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter();
onMounted(() => {
    const userStore = useUserStore()
    if(!Security.isRole(userStore.roles,'ROLE_ADMIN') || !Security.isConnected())
    {
      router.push({name:'home'});
      return;
    }
})

</script>
<template>
  <section class="admin">
    <NavBarAdminComponent/>
    <slot/>
  </section>
</template>
