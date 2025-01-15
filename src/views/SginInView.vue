<script setup lang="ts">
import FormComponent from '@/components/FormComponent.vue';
import PhoneComponent from '@/components/PhoneComponent.vue';
import { Address } from '@/model/Address';
import { User } from '@/model/User';
  const user = new User();
  const address = new Address();
</script>

<template>
  <div style="width: 100%;height: 100%;">
    <FormComponent :route="'api/users'" :methode="'POST'" :body="user">
      <h3>Crée un compte</h3>
      <template v-slot:body>
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="user.email" >
        </div>
        <div>
            <label for="postal_code">Code postal</label>
            <input type="text" id="postal_code" v-model="user.address.postalCode">
          </div>
        <div class="grid grid-column-2">
          <div>
            <label for="city">City</label>
            <input type="text" v-model="user.address.city">
          </div>
          <div>
            <label for="country">Payes</label>
            <input type="text" v-model="user.address.country">
          </div>
        </div>
        <div>
          <label for="street">Address</label>
          <input id="street" v-model="user.address.address">
        </div>
        <div>
          <label for="password">Mot de pass</label>
          <input id="password" v-model="user.plainPassword.password" type="password">
        </div>
        <div>
          <label for="repeat-password">Retaper le mot de pass</label>
          <input id="repeat-password" v-model="user.plainPassword.repeatPassword" type="password">
        </div>
      </template>
    <template v-slot:submit>
      Crée le compte
    </template>
  </FormComponent>
  </div>
</template>
