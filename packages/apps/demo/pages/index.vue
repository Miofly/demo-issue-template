<script lang="ts" setup>
import IconText from '~/components/icon-text.vue';

const test = ref('我的11身上');

useHead({
	title: 'appName',
})


const { width, height } = useWindowSize()
</script>

<template>
	<div>
		<div>{{ test }}</div>
		<div>{{ width }}{{ height }}</div>
		<icon-text></icon-text>
	</div>
</template>
