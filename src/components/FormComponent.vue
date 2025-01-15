<script setup lang="ts">
  import '../assets/form.css'
  const emit = defineEmits(['response','error-response'])
  const url = import.meta.env.VITE_API_URL;

  const props = defineProps({
    route: String,
    methode: String,
    body: null
  });

  async function ApiRequest() {
    try{
      const headers = new Headers();
      headers.append('Content-Type','application/ld+json');
      const response = await fetch(url+props.route,{
        method:props.methode,
        body:JSON.stringify(props.body),
        headers:headers,
        mode: "cors",
        credentials: "include"
      })
        emit('response',await response.json())
    }
    catch (error)
    {
      console.error(error);
      emit('error-response',error)
    }
  }
</script>
<template>
  <form @submit.prevent="ApiRequest" >
    <slot name="body"></slot>
    <div class="submit">
    <button type="submit">
      <slot name="submit">Valider</slot>
    </button>
    </div>

  </form>
</template>
