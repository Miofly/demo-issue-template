<script setup lang="ts">
import { useAppStore } from '@/stores/counter';

const appStore = useAppStore();

setTimeout(() => {
  appStore.name = '8888'
}, 1500)
</script>

<template>
  <main>
    HomeView
  </main>
</template>
