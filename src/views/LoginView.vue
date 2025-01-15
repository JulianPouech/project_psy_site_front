<script setup lang="ts">
  import FormComponent from '@/components/FormComponent.vue';
import {Cookie} from '@/model/Cookie';
import router from '@/router';
import { jwtDecode } from 'jwt-decode';
  let errorMessage = ""
  const login = {
    email:"",
    password:"",
  }

  function response(result:Object)
  {
    if(result.response === undefined)
    {
      return;
    }

    const cookie = Cookie.getCookie('Authorization')
    router.push({name:'home'});
  }

  function errorsResponse(error:Error)
  {
    errorMessage = error.message
  }

</script>
<template>
  <FormComponent :route="'api/auth'" @error-response="errorsResponse" @response="response" :body="login"  :methode="'POST'">
  <h4 v-if="errorMessage!=''">{{errorMessage}}</h4>
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
</template>
