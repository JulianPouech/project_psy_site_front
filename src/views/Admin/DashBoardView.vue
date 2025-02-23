<script setup lang="ts">
import AppointmentComponent from '@/components/AppointmentComponent.vue';
import '@/assets/admin.css';
import { api, Method } from '@/model/Api';
import type { Appointment } from '@/model/Appointment';
import { Cookie } from '@/model/Cookie';
import { Security } from '@/model/Security';
import { useUserStore } from '@/stores/useUserStore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AdminComponent from '@/components/AdminComponent.vue';
  const userStore = useUserStore();
  const router = useRouter();
  let appointments = ref<Array<Appointment>>([])

  /**
  * get 10 in coming appointment
  */
  async function getAppointment()
  {
    const header = new Headers();
    const cookie = Cookie.getCookie('Authorization');

    if(cookie.name === 'Authorization')
    {
      header.set('Authorization','Bearer '+cookie.value)
    }

    const response = await api.request('../../../test/appointments.json', Method.GET, null, header);

    if(response.status === 403)
    {
      router.push({name:'home'});
      return;
    }else if(response.status === 401)
    {
      router.push({name:'login'});
      return;
    }

    const json = await response.json();
    console.log(json);
    appointments.value = json['appointments'];

  }

  onMounted(() => {
      getAppointment();
  })
</script>
<template class="admin">
  <AdminComponent>
  <div class="appointments">
    <RouterView/>
    <h2>Prochain rend-vous</h2>
    <ul>
      <template v-for="appointment in appointments">
        <AppointmentComponent v-bind="appointment"/>
      </template>
    </ul>
  </div>
  </AdminComponent>
</template>
