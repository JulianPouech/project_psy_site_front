<script setup lang="ts">
import { computed } from 'vue';

  const model = defineModel();
  const props = defineProps({
      type: String,
      id: String,
      error: String,
      title:String,
      require:Boolean
  });
  const errorClass = computed(() => {
   return props.error != undefined && props.error.length > 0
  });
</script>
<template>
  <div :class="{error: errorClass, require: props.require}">
    <label :for="props.id">{{props.title}}</label>
    <slot name="vinput"><input :name="props.id" :required="props.require" :type="props.type" :id="props.id"  v-model="model"></slot>
    <h5 class="error">{{props.error}}</h5>
  </div>
</template>
