<script lang="ts" setup>
import { useAppStore } from '@/stores/counter';

const appStore = useAppStore();

setTimeout(() => {
  appStore.name = '8888'
}, 1500)
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
