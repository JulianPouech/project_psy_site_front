<script setup lang="ts">
  import ContactFormComponent from "../components/ContactFormComponent.vue"
</script>
<template>
  <header>
      <h1 class="title">Contact</h1>
  </header>
  <section class="grid grid-column-2">
    <div>
      <p>email</p>
      <p>numero de telephone</p>
    </div>
    <ContactFormComponent/>
  </section>
</template>
