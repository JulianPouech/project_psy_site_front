<script setup lang="ts">
import { api } from '@/model/Api';
import { Cookie } from '@/model/Cookie';
import { User } from '@/model/User';
import { jwtDecode } from 'jwt-decode';
import { onMounted, ref } from 'vue';
  const user = ref(new User());

  async function getAccount()
  {
    const header = new Headers
    const cookie = Cookie.getCookie('Authorization');
    if(cookie.name === 'Authorization')
    {
      header.set('Authorization','Bearer '+cookie.value)
    }
    let curentUserAuth = jwtDecode(cookie.value);
    const response = await api.request(api.url+'api/users/'+curentUserAuth['id'],api.Method.GET,null,header)
    const jsonResponse = await response.json()
    user.value.email = jsonResponse['email']
    user.value.address = jsonResponse['address']
  }
  onMounted(() => {
    getAccount();
  })
</script>
<template>
  <h4>email {{user.email}}</h4>
</template>
