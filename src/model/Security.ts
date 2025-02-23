import { useUserStore } from "@/stores/useUserStore";

export function isRole(roles = [] as Array<string>,name: string){
  const test = roles.find((element) => element === name);
  console.log(test);
  return test;
}

export function isConnected(){
  const userStore = useUserStore()
  return userStore.username !== "";
}
export const Security = {isRole,isConnected}
