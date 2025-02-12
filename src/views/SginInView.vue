<script setup lang="js">
import FormComponent from '@/components/FormComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import PopupComponent from '@/components/PopupComponent.vue';
import { Method } from '@/model/Api';
import { User } from '@/model/User';
import router from '@/router';
import { ref } from 'vue';
  const user = new User();

  const errors = ref({})
  const test = ref('test')
  /**
  * @param {Response} response
  **/
  async function getResponse(response)
  {
    if(!response.ok)
    {
      return
    }

    const json = await response.json();
    if(json['errors'] === undefined)
    {
      router.push({name: 'login'})
      return;
    }

    const errorsArray = json['errors']
    const objectError = {}
    errorsArray.forEach(itemError =>{
      const error =  itemError.split(':')
      objectError[error[0]] = error[1];
    })
    console.log(objectError);
    errors.value = objectError;
  }

  /**
InputConponent
  * @param {Error} error
  **/
  function getError(error)
  {
    console.error(error);

  }

</script>

<template>
  <PopupComponent class="clear">
    <FormComponent :route="'api/users'" :method="Method.POST" @response="getResponse" @error-response="getError" :body="user">
      <template v-slot:title>Crée un compte</template>
      <template v-slot:body>
        <InputComponent v-model="user.email"
          :error="errors['email']"
          type="text" id="email"
          title="Email" :require="true"/>

        <InputComponent v-model="user.address.postalCode"
          :error="errors['postalCode']"
          id="postal-code"
          :require="true"
          title="Code Postal"/>

        <div class="grid grid-column-2">
          <InputComponent v-model="user.address.city" :require="true"
            :error="errors['city']" type="text"
            id="city" title="Ville"/>

          <InputComponent v-model="user.address.country" :error="errors['country']"
            type="text" id="country"
            title="Pays"/>
        </div>
        <InputComponent v-model="user.address.address"
          :error="errors['address']" :require="true"
          title="Address" type="text"/>

        <InputComponent v-model="user.plainPassword.password" title="Mot de pass"
          :require="true" :error="errors['password']" type="password"
          id="password"/>
        <InputComponent v-model="user.plainPassword.repeatPassword" title="Retaper le mot de pass"
          :require="true" :error="errors['repeatPassword']" id="repeatPassword"
          type="password"
          />
      </template>
    <template v-slot:submit>
      Crée le compte
    </template>
  </FormComponent>
  </PopupComponent>
</template>
