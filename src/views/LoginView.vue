<script setup lang="ts">
  import FormComponent from '@/components/FormComponent.vue';
import * as api from  '@/model/Api';
import {Cookie} from '@/model/Cookie';
import {useUserStore} from '@/stores/useUserStore';
import router from '@/router';
import { jwtDecode } from 'jwt-decode';
import { ref } from 'vue';
import PopupComponent from '@/components/PopupComponent.vue';
  const userStore = useUserStore();
  let errorMessage = ref();
  const login = {
    email:"",
    password:"",
  }

  function getResponse(response:Response)
  {
    if(response.status === 401)
    {
      errorMessage.value = "email ou mot de pass incorect"
      return;
    }
    if(!response.ok)
    {
      return;
    }
    const cookie = Cookie.getCookie('Authorization')
    userStore.$patch({name: jwtDecode(cookie.value).username});
    router.push({name:'home'});
  }

  function errorsResponse(error:Error)
  {
    errorMessage.value = error.message
  }

</script>
<template>
  <PopupComponent class="clear">
  <FormComponent class="modal" :route="'api/auth'" @error-response="errorsResponse" @response="getResponse" :body="login"  :method="api.Method.POST">
    <template v-slot:head>
      <h3 class="error" v-if="errorMessage !=''">{{errorMessage}}</h3>
    </template>
    <template v-slot:title>Ce connecter</template>
    <template v-slot:body>
      <div>
        <label for="email">email</label>
        <input type="email" id="email" v-model="login.email">
      </div>
      <div>
        <label for="password">mot de pass</label>
        <input type="password" id="password" v-model="login.password">
      </div>
    </template>
  </FormComponent>
  </PopupComponent>
</template>
