<script lang="ts" setup>
import { computed, type CSSProperties, inject } from 'vue';
import { addUnit } from '@vft/utils';
import { useNamespace } from '../../use';
import Badge from '../badge/index.vue';
import { CONFIG_PROVIDER_KEY } from '../config-provider/types';

interface IconProps {
  /** 是否显示图标右上角小红点 */
  dot?: boolean;
  /** 图标名称或图片链接 */
  icon: string;
  /** 图标大小 */
  size?: Numberish;
  /** 图标右上角徽标的内容 */
  badge?: Numberish;
  /** 图标颜色 */
  color?: string;
  /** 类名前缀，用于使用自定义图标 */
  classPrefix?: string;
  spin?: boolean;
  cursor?: boolean;
  scale?: number
}

const emit = defineEmits(['click']);

const { color, size, icon, classPrefix, spin, cursor, scale } = defineProps<IconProps>();

const ns = /* hoist-static*/ useNamespace('icon');

defineOptions({
  name: ns.b()
});

const style = computed(() => {
  const _style: CSSProperties = {};
  if (color) {
    _style['color'] = color;
  }
  if (size) {
    _style['fontSize'] = addUnit(size);
  }
  if (spin) {
    _style['animation'] = 'vft-rotate 1s linear 0s infinite';
  }
  if (cursor) {
    _style['cursor'] = 'pointer';
  }
  if (scale) {
    _style.transform = 'scale(0.8)';
  }
  return _style;
});

const isImage = (name?: string) => name?.includes('/');
const isImageIcon = isImage(icon);

const config = inject(CONFIG_PROVIDER_KEY, null);

const _classPrefix = computed(() => classPrefix || config?.value?.iconPrefix);
const classes = computed(() => (isImageIcon ? '' : [icon.startsWith('vi-') ? 'vicon' : 'iconfont', `${_classPrefix.value || ''}${icon}`]));
</script>

<template>
  <Badge isIcon @click="emit('click')" :spin="spin" :dot="dot" :class="[ns.b(), classes]" :style="style" :content="badge">
    <slot />
    <img v-if="isImageIcon" :class="ns.e('image')" :src="icon" alt="" />
  </Badge>
</template>

<style lang="scss">
@import './index.scss';
</style>
