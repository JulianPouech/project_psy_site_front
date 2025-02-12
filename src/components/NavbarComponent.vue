<script setup lang="ts">
  import { Cookie} from '@/model/Cookie';
  import '../assets/navbar.css'
  import { RouterLink } from 'vue-router';
import { jwtDecode } from 'jwt-decode';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore()
onMounted(() => {
  const cookie = Cookie.getCookie("Authorization");
  if(cookie.name === "Authorization"){
    userStore.$patch({name:jwtDecode(cookie.value).username});
  }
})
</script>
<template>
  <nav>
    <ul>
      <li><RouterLink class="logo" :to="{ name:'home' }"><img alt="Logo du site" src="../../public/placeholder/logo.png" height="56px"></RouterLink></li>
    </ul>
    <ul>
      <li><RouterLink :to="{ name:'contact' }">Contact</RouterLink></li>
      <template v-if="userStore.name === ''">
        <li><RouterLink :to="{ name:'sing-in'}">crée un compte</RouterLink></li>
        <li><RouterLink :to="{ name:'login'}">se-connecter</RouterLink></li>
      </template>
      <template v-if="userStore.name !== ''">
        <li><RouterLink :to="{ name: 'account'}">{{userStore.name}}</RouterLink></li>
      </template>
    </ul>
  </nav>
</template>

