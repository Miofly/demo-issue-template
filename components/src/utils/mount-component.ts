import { createApp, reactive, type Component } from 'vue';
import { useExpose } from '@vft/use';

/**
 * @description popup 组件的状态控制
 * @author wfd
 * @date 2022/7/13 13:40
 * @example
 */
export function usePopupState() {
  const state = reactive<{
    show: boolean;
    [key: string]: any;
  }>({
    show: false
  });

  // 切换 show 的状态
  const toggle = (show: boolean) => {
    state.show = show;
  };

  // 如果是 open 说明是打开 popup，transitionAppear 设置为 true
  const open = (props: Record<string, any>) => {
    // 这里直接用 Object.assign 的原因是可以，合并后 state 会被直接改变
    Object.assign(state, props, { transitionAppear: true });
    // 将 show 改为 true
    toggle(true);
  };

  // 关闭 popup 事件
  const close = () => toggle(false);

  // 将 open, close, toggle 合并到 instance 实例对象的 proxy 属性中
  useExpose({ open, close, toggle });

  return {
    open,
    close,
    state,
    toggle
  };
}

/**
 * @description mountComponent
 * @author wfd
 * @date 2022/7/12 20:13
 * @example
 * @param RootComponent
 */
export function mountComponent(RootComponent: Component) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }
  };
}
