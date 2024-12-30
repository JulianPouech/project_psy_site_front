<script setup lang="ts">
  import '../model/ApiConnection.ts'
  import '../assets/form.css'
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = import.meta.env.VITE_API_URL;
  let result ="";
  const props = defineProps({
    route: String,
    methode: String,
    body: null
  });

  async function ApiRequest() {
    const body  = props.body;
    body.apiKey = apiKey;
    const response = await fetch(url+props.route,{
      method:props.methode,
      body:JSON.stringify(body),
    })
    console.log(response);
    result = await response.json();
  }
</script>
<template>
  <form @submit.prevent="ApiRequest" >
    <h2>{{ result['response'] }}</h2>
    <slot name="body"></slot>
    <div class="submit">
    <button type="submit">
      <slot name="submit">Valider</slot>
    </button>
    </div>

  </form>
</template>
