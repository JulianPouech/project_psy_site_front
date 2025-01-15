<script setup lang="ts">
  import { Cookie} from '@/model/Cookie';
  import '../assets/navbar.css'
  import { RouterLink } from 'vue-router';
import { jwtDecode } from 'jwt-decode';
import { onMounted } from 'vue';


</script>
<template>
  <nav>
    <ul>
      <li><RouterLink class="logo" :to="{ name:'home' }"><img alt="Logo du site" src="../../public/placeholder/logo.png" height="56px"></RouterLink></li>
    </ul>
    <ul>
      <li><a></a></li>
      <li><RouterLink :to="{ name:'contact' }">Contact</RouterLink></li>
      <template>
        <li><RouterLink :to="{ name:'sing-in'}">crée un compte</RouterLink></li>
        <li><RouterLink :to="{ name:'login'}">se-connecter</RouterLink></li>
      </template>
      <li ><RouterLink :to="{ name: 'account'}"></RouterLink></li>
    </ul>
  </nav>
</template>

