<script lang="ts" setup>
import IconText from '~/components/icon-text.vue';

const test = ref('我的11身上');
</script>

<template>
	<div>
		<div>{{ test }}</div>
		<icon-text></icon-text>
	</div>
</template>
