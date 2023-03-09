import type { InjectionKey, Ref } from 'vue';
import type { MessageConfigContext } from '../message/message';

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
  projectCfg?: Record<string, any>
}

export const messageConfig: MessageConfigContext = {};

export const CONFIG_PROVIDER_KEY: InjectionKey<Ref<ConfigProviderContext>> = Symbol('config-provider-component');

export type ConfigProviderContext = Pick<ConfigProviderProps, 'iconPrefix' | 'namespace' | 'zIndex' | 'message' | 'projectCfg'>

