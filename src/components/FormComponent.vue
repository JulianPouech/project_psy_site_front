<script setup lang="ts">
  import router from '@/router';
import '../assets/form.css'
import * as api from '../model/Api.ts'
import { Cookie } from '@/model/Cookie.ts';
  const emit = defineEmits(['response','error-response'])
  const url = import.meta.env.VITE_API_URL;

  const props = defineProps({
    route: String,
    method: String,
    body: null
  });

  async function request() {
    const cookie = Cookie.getCookie('Authorization');
    const header = new Headers();
    if(props.method === undefined)
    {
      return;
    }

    if(cookie.name === 'Authorization')
    {
      header.set('Authorization','Bearer'+cookie.value)
    }
    try{
      const response = await api.request(url+props.route,props.method,props.body,header);
      emit('response', response);
    }catch (error){
      emit('error-response',error);
    }
  }
</script>
<template>
  <form @submit.prevent="request" >
    <div class="head">
      <slot name="head"></slot>
    </div>
    <h3 class="title">
      <slot name="title">Title</slot>
    </h3>
    <slot name="body"></slot>
    <div class="submit">
    <button type="submit">
      <slot name="submit">Valider</slot>
    </button>
    </div>

  </form>
</template>
