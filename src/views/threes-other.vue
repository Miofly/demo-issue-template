<template>
	<div>
		这是第三个三级路由页面 threes-other
		<input v-model="value">
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref();
console.log('第三个路由子页面----重复执行');
</script>
