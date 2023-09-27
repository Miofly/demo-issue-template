<script setup lang="ts">
export interface BasicProps {
  name?: string;
}

const { name } = defineProps<BasicProps>();

const basicEmit = defineEmits<{
  (event: 'test'): void;
}>();
</script>

<template>
  <div>
    {{ name }}
    basic
  </div>
</template>
