<script setup lang="ts">
  import { Cookie} from '@/model/Cookie';
  import '../assets/navbar.css'
  import { RouterLink, useRouter } from 'vue-router';
  import { jwtDecode } from 'jwt-decode';
  import { onMounted, ref } from 'vue';
  import { useUserStore } from '@/stores/useUserStore';
  import * as Security from '@/model/Security';
import type { JwtUser } from '@/model/JwtUser';
  const userStore = useUserStore();
  const isBurgerHidden = ref(true);
  const router = useRouter()
  function toggleBurger(){
      isBurgerHidden.value = !isBurgerHidden.value;
  }

  function logout()
  {
    Cookie.remove("Authorization");
    userStore.$reset();
    router.push({name:'home'});
  }

  onMounted(() => {
    const cookie = Cookie.getCookie("Authorization");
    if(cookie.name === "Authorization" && cookie.value !== ""){
      const AuthorizationDecoder = jwtDecode<JwtUser>(cookie.value);
      userStore.$patch({username:AuthorizationDecoder.username,roles:AuthorizationDecoder.roles});
    }
  })
</script>
<template>
  <nav>
    <ul>
      <li><RouterLink class="logo" :to="{ name:'home' }"><img alt="Logo du site" src="../../public/placeholder/logo.png" height="56px"></RouterLink></li>
    </ul>
    <span class="burgeur-button" v-on:click="toggleBurger">burger</span>
    <ul class="navigation" :class="{'hidden': isBurgerHidden}">
      <li><RouterLink :to="{ name:'contact' }">Contact</RouterLink></li>
      <template v-if="!Security.isConnected()">
        <li><RouterLink :to="{ name:'sing-in'}">crée un compte</RouterLink></li>
        <li><RouterLink :to="{ name:'login'}">se-connecter</RouterLink></li>
      </template>
      <template v-if="Security.isConnected() && Security.isRole(userStore.roles,'ROLE_USER')">
        <li><RouterLink :to="{ name: 'account'}">{{userStore.username}}</RouterLink></li>
      </template>
      <template v-if="Security.isRole(userStore.roles,'ROLE_ADMIN')">
        <li><RouterLink :to="{ name: 'admin'}">admin pages</RouterLink></li>
      </template>
      <template v-if="Security.isConnected()">
        <li><a v-on:click="logout">Ce deconecter</a></li>
      </template>
    </ul>
  </nav>
</template>

