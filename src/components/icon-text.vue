<script lang="ts" setup>
import { type EmitProps } from '@/components/constants';
import { type BasicProps } from './basic.vue';

interface Props extends BasicProps {
  color: string;
  list?: any[];
}

const { color, list = () => [] } = defineProps<Props>();

const emit = defineEmits<EmitProps>();

const { modelValue } = defineModels<{
  modelValue: string;
}>();

const handleMouseDown = () => {
  emit('test');
};
</script>

<template>
  <div :style="{ color }" @mousedown="handleMouseDown" @click="emit('click')">
    value: {{ modelValue }}
    <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    {{ name }}
  </div>
</template>
