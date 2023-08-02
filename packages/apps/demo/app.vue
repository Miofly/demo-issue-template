<script setup lang="ts">
useHead({
	title: 'appName',
})
</script>

<template>
	<div>
  
		<NuxtLayout>
      <div class="text-red-500">
        我是app.vue
      </div>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
