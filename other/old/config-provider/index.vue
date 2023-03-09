<script lang="ts" setup>
import { inBrowser, kebabCase } from '@vft/utils';
import { computed, watch, onActivated, onDeactivated, onBeforeUnmount } from 'vue';
import { useNamespace } from '../../use';
import type { MessageConfigContext } from '../message/message';
import { messageConfig } from './types';

interface ConfigProviderProps {
  /** 主题风格 */
  theme?: Theme;
  /** 自定义主题变量 */
  themeVars?: Record<string, Numberish>;
  /** 仅在深色模式下生效的主题变量 */
  themeVarsDark?: Record<string, Numberish>;
  /** 仅在浅色模式下生效的主题变量 */
  themeVarsLight?: Record<string, Numberish>;
  /** 所有图标的类名前缀 */
  iconPrefix?: string;
  /** 组件公共命名 */
  namespace?: string;
  /** 设置所有弹窗类组件的 z-index */
  zIndex?: number;
  /** 可同时显示的消息最大数量 */
  message?: MessageConfigContext;
  projectCfg?: Record<string, any>;
}

const { theme = 'light', namespace = 'vri', themeVars, themeVarsDark, themeVarsLight, zIndex, iconPrefix, message, projectCfg } = defineProps<ConfigProviderProps>();

const ns = /* hoist-static*/ useNamespace('config-provider');

defineOptions({
  name: ns.b()
});

// 将外部传入的 message 的配置进行合并处理
watch(
  () => message,
  (val) => {
    Object.assign(messageConfig, val ?? {});
  },
  { immediate: true, deep: true }
);

// 合并传入的主题变量传入到 style 中
const style = computed(() => {
  const isDark = theme === 'dark';
  return mapThemeVarsToCSSVars({
    ...themeVars,
    ...(isDark ? themeVarsDark : themeVarsLight)
  });
});

if (inBrowser) {
  const addTheme = () => {
    document.documentElement.classList.add(theme);
  };
  const removeTheme = (_theme = theme) => {
    document.documentElement.classList.remove(_theme);
  };

  // 监听 theme 主题的变化，移除旧的，添加新的在 document.body 上
  watch(
    () => theme,
    (newVal, oldVal) => {
      if (oldVal) {
        removeTheme(oldVal);
      }
      addTheme();
    },
    { immediate: true }
  );

  onActivated(addTheme);
  onDeactivated(removeTheme);
  onBeforeUnmount(removeTheme);
}

function mapThemeVarsToCSSVars(themeVars: Record<string, Numberish>) {
  const cssVars: Record<string, Numberish> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--${namespace}-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}

provideGlobalConfig({ iconPrefix, namespace, message, zIndex, projectCfg });
</script>

<template>
  <div :class="ns.b()" :style="style">
    <slot />
  </div>
</template>
