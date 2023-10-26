<script setup lang="ts">
import { onActivated, onDeactivated } from 'vue';

onActivated(() => {
  console.log('onActivated');
})

onDeactivated(() => {
  console.log('onDeactivated why after onBeforeRouteLeave');
})

onBeforeRouteLeave((_, from, next) => {
  console.log('onBeforeRouteLeave');
  next()
})
</script>

<template>
  <div>
    <div>1</div>
    <router-link to="/test">enter test</router-link>
  </div>
</template>

<style scoped lang="scss">

</style>