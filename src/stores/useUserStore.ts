import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user',() => {
  const name = ref('');
  const roles = ref([]);
  const id = ref(0);

  function $reset()
  {
    name.value = '';
    roles.value = [];
    id.value = 0
  }
  return {name, roles, id, $reset}
})
