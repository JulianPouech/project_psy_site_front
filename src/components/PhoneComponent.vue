<script setup lang="ts">
import { computed, ref } from 'vue';
  const phone = defineModel('phone');
  const language = defineModel('language');
</script>
<template>
  <label for="phone">telephone</label>
  <div class="phone">
    <select v-model="language">
      <option>FR</option>
      <option>ES</option>
    </select>
    <input v-model="phone" id="phone" type="text">
  </div>
</template>
<style lang="css">
  .phone select{
    border-right: none;
    border-radius: 4px 0px 0px 4px;
    background: #0047D6;
    border: none

  }
  .phone input{
    border-left: none;
    border-radius: 0px 4px 4px 0px;
  }

  .phone{
    display: grid;
    grid-template-columns: 64px auto;
  }
</style>
