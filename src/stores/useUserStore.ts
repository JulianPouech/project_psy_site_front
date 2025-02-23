import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user',() => {
  const username = ref('');
  const roles = ref([] as Array<string>);
  const id = ref(0);

  function $reset()
  {
    username.value = '';
    roles.value = [];
    id.value = 0
  }
  return {username, roles, id, $reset}
})
