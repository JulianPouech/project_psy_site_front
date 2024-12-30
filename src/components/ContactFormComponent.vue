<script setup lang="ts">
  import FormComponent from './FormComponent.vue';
  const mail = {
    name:"",
    firstName:"",
    email:"",
    message:"",
    jwk:"",
    apiKey:""
  }
  /*
  * post respons to the api and return result
  */
</script>
<template>
  <FormComponent v-bind:body="mail" v-bind:methode="'POST'" v-bind:route="'/contact/index.jso'">
    <template v-slot:body>
      <div>
        <label for="form-email">Email</label>
        <input required type="email" v-model="mail.email" id="form-email">
      </div>
      <div class="grid grid-column-2">
        <div style="padding-right: 4px;">
          <label for="first-name">Prenom</label>
          <input required v-model="mail.name" id="first-name" >
        </div>
        <div style="padding-left: 4px;">
          <label for="form-name">Nom</label>
          <input required v-model="mail.firstName" name="name" id="form-name">
        </div>
      </div>
      <label  for="form-message">Message</label>
      <textarea required v-model="mail.message" id="form-message">
      </textarea>
    </template>
    <template v-slot:submit>
      Envoyer
    </template>
  </FormComponent>
</template>
