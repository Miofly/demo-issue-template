<script lang="ts" setup>
import { createNamespace } from '@vft/utils';
import { Spin, type SpinProps } from '../../common/spin';
import SpinImg from './assets/spin.gif';

interface PageLoadingProps {
  /** loading 配置 */
  spinCfg?: SpinProps;
}

const { spinCfg } = defineProps<PageLoadingProps>();

const [name, bem] = /* hoist-static*/ createNamespace('page-loading');

defineOptions({
  name
});

const _spinCfg = computed(() => {
  return {
    vertical: true,
    size: 40,
    textSize: 13,
    textColor: '#5c5c5c',
    ...spinCfg
  };
});
</script>

<template>
  <div :class="['flex-center bg-white', bem()]">
    <Spin :icon="SpinImg" v-bind="_spinCfg">正在加载...</Spin>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>
