<template>
  <div>
		这是三级路由页面
		<input v-model="value">
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref();
console.log('这是三级路由页面');
</script>
