<template>
  <div ref="scrollbarRef" :class="ns.b()">
    <div ref="wrapRef" :class="wrapKls" :style="style" @scroll="handleScroll">
      <component
        :is="tag"
        ref="resizeRef"
        :class="resizeKls"
        :style="viewStyle"
      >
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <bar
        ref="barRef"
        :height="sizeHeight"
        :width="sizeWidth"
        :always="always"
        :ratio-x="ratioX"
        :ratio-y="ratioY"
      />
    </template>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch
} from 'vue';
import { useEventListener, useResizeObserver } from '@vueuse/core';
import { addUnit, isNumber, isObject } from '@vft/utils';
import { debugWarn } from '../../utils';
import { scrollbarContextKey } from './tokens';
import { useNamespace } from '../../use';
import { GAP } from './util';
import Bar from './bar.vue';
import type { CSSProperties, StyleValue } from 'vue';

interface Props {
  height?: number | string
  maxHeight?: number | string
  native?: boolean
  wrapStyle?: StyleValue
  wrapClass?: string | Array<any>
  viewClass?: string | Array<any>
  viewStyle?: StyleValue
  noresize?: boolean
  tag?: string
  always?: boolean
  minSize?: number
}

const {
  height,
  maxHeight,
  native = false,
  wrapStyle,
  wrapClass,
  viewClass,
  viewStyle,
  noresize,
  tag = 'div',
  always,
  minSize = 20
} = defineProps<Props>();

const ns = /* hoist-static*/ useNamespace('scrollbar');

defineOptions({
	name: ns.b()
});

const emit = defineEmits(['scroll']);

let stopResizeObserver: (() => void) | undefined = undefined;
let stopResizeListener: (() => void) | undefined = undefined;

const scrollbarRef = ref<HTMLDivElement>();
const wrapRef = ref<HTMLDivElement>();
const resizeRef = ref<HTMLElement>();

const sizeWidth = ref('0');
const sizeHeight = ref('0');
const barRef = ref();
const ratioY = ref(1);
const ratioX = ref(1);

const style = computed<StyleValue>(() => {
  const style: CSSProperties = {};
  if (height) style.height = addUnit(height);
  if (maxHeight) style.maxHeight = addUnit(maxHeight);
  return [wrapStyle, style];
});

const wrapKls = computed(() => {
  return [
    wrapClass,
    ns.e('wrap'),
    { [ns.em('wrap', 'hidden-default')]: !native }
  ];
});

const resizeKls = computed(() => {
  return [ns.e('view'), viewClass];
});

const handleScroll = () => {
  if (wrapRef.value) {
    barRef.value?.handleScroll(wrapRef.value);

    emit('scroll', {
      scrollTop: wrapRef.value.scrollTop,
      scrollLeft: wrapRef.value.scrollLeft
    });
  }
};

// TODO: refactor method overrides, due to script setup dts
// @ts-nocheck
function scrollTo(xCord: number, yCord?: number): void
function scrollTo(options: ScrollToOptions): void
function scrollTo(arg1: unknown, arg2?: number) {
  if (isObject(arg1)) {
    wrapRef.value!.scrollTo(arg1);
  } else if (isNumber(arg1) && isNumber(arg2)) {
    wrapRef.value!.scrollTo(arg1, arg2);
  }
}

const setScrollTop = (value: number) => {
  if (!isNumber(value)) {
    debugWarn(ns.b(), 'value must be a number');
    return;
  }
  wrapRef.value!.scrollTop = value;
};

const setScrollLeft = (value: number) => {
  if (!isNumber(value)) {
    debugWarn(ns.b(), 'value must be a number');
    return;
  }
  wrapRef.value!.scrollLeft = value;
};

const update = () => {
  if (!wrapRef.value) return;
  const offsetHeight = wrapRef.value.offsetHeight - GAP;
  const offsetWidth = wrapRef.value.offsetWidth - GAP;

  const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
  const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
  const height = Math.max(originalHeight, minSize);
  const width = Math.max(originalWidth, minSize);

  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height));
  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width));

  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : '';
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : '';
};

watch(
  () => noresize,
  (noresize) => {
    if (noresize) {
      stopResizeObserver?.();
      stopResizeListener?.();
    } else {
      ;({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
      stopResizeListener = useEventListener('resize', update);
    }
  },
  { immediate: true }
);

watch(
  () => [maxHeight, height],
  () => {
    if (!native)
      nextTick(() => {
        update();
        if (wrapRef.value) {
          barRef.value?.handleScroll(wrapRef.value);
        }
      });
  }
);

provide(
  scrollbarContextKey,
  reactive({
    scrollbarElement: scrollbarRef,
    wrapElement: wrapRef
  })
);

onMounted(() => {
  if (!native)
    nextTick(() => {
      update();
    });
});
onUpdated(() => update());

defineExpose({
  /** @description scrollbar wrap ref */
  wrapRef,
  /** @description update scrollbar state manually */
  update,
  /** @description scrolls to a particular set of coordinates */
  scrollTo,
  /** @description set distance to scroll top */
  setScrollTop,
  /** @description set distance to scroll left */
  setScrollLeft,
  /** @description handle scroll event */
  handleScroll
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
