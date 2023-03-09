/**
 * Popup 组件的 z-index。
 
 * 会影响以下组件：
 *   - ActionSheet
 *   - Calendar
 *   - Dialog
 *   - DropdownItem
 *   - ImagePreview
 *   - Notify
 *   - Popup
 *   - Popover
 *   - ShareSheet
 *   - Toast
 */
let globalZIndex = 2000;

/** 全局 z-index 读取后自动递增 */
export const useGlobalZIndex = () => ++globalZIndex;

/** 全局 z-index */
export const setGlobalZIndex = (val: number) => {
  globalZIndex = val;
};
