<script lang="ts" setup>
interface Props {
	text: string
  color: string
}

const {
  text,
  color
} = defineProps<Props>();
</script>

<template>
  <div :style="{color}">{{ text }}</div>
</template>

<style lang="scss" scoped>

</style>
