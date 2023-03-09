import { openNewTab } from '@vft/utils';
import { unref } from 'vue';
import type { RouteLocationNormalized, Router } from 'vue-router';
import { useRouter } from 'vue-router';
import { TableActionEnum } from './constants';
import { useMultipleTabStore } from './store';

export function useTabs(_router?: Router) {
  const tabStore = useMultipleTabStore();
  const router = _router || useRouter();

  const { currentRoute } = router;

  // 获取当前路由的 tab 信息
  function getCurrentTab() {
    const route = unref(currentRoute);
    return tabStore.getTabList.find((item) => {
      if ((item.meta?.hideActiveRoute as RouteLocationNormalized)?.fullPath) {
        return (item.meta.hideActiveRoute as RouteLocationNormalized).fullPath === route.fullPath;
      } else {
        return item.fullPath === route.fullPath;
      }
    });
  }

  // 设置 tab 标题
  async function updateTabTitle(title: string, tab?: DeepPartial<RouteLocationNormalized>) {
    const targetTab = tab || getCurrentTab();
    await tabStore.setTabTitle(title, targetTab as RouteLocationNormalized);
  }

  /** 打开一个新 win 页面 */
  async function newWinTab(tab?: RouteLocationNormalized) {
    if (tab) {
      const fromPath = (tab.meta?.hideActiveRoute as RouteLocationNormalized)?.fullPath || (tab.meta?.hideActiveRoute as RouteLocationNormalized)?.path;
      if (fromPath) {
        openNewTab(fromPath);
      } else {
        openNewTab(tab.fullPath || tab.path);
      }
    } else {
      openNewTab(location.href);
    }
  }

  function getTabTitle(tab?: RouteLocationNormalized) {
    const targetTab = tab || getCurrentTab();
    return targetTab?.meta?.title;
  }

  async function updateTabPath(path: string, tab?: RouteLocationNormalized) {
    const targetTab = tab || getCurrentTab();
    await tabStore.updateTabPath(path, targetTab!);
  }

  // 右键菜单中的多 tab 的操作
  async function handleTabAction(action: TableActionEnum, tab?: RouteLocationNormalized) {
    const currentTab = getCurrentTab();
    switch (action) {
      case TableActionEnum.REFRESH:
        await tabStore.refreshPage(100, router, tab as RouteLocationNormalized);
        break;

      case TableActionEnum.CLOSE_ALL:
        await tabStore.closeAllTab(router);
        break;

      case TableActionEnum.CLOSE_LEFT:
        await tabStore.closeLeftTabs(router, tab as RouteLocationNormalized);
        break;

      case TableActionEnum.CLOSE_RIGHT:
        await tabStore.closeRightTabs(router, tab as RouteLocationNormalized);
        break;

      case TableActionEnum.CLOSE_OTHER:
        await tabStore.closeOtherTabs(router, tab as RouteLocationNormalized);
        break;

      case TableActionEnum.CLOSE_CURRENT:
      case TableActionEnum.CLOSE:
        await tabStore.closeTab((tab || currentTab)!, router);
        break;
    }
  }

  return {
    refreshPage: (tab?: RouteLocationNormalized) => handleTabAction(TableActionEnum.REFRESH, tab),
    newWinTab: (tab?: RouteLocationNormalized) => newWinTab(tab),
    closeAll: () => handleTabAction(TableActionEnum.CLOSE_ALL),
    closeLeft: (tab?: RouteLocationNormalized) => handleTabAction(TableActionEnum.CLOSE_LEFT, tab),
    closeRight: (tab?: RouteLocationNormalized) => handleTabAction(TableActionEnum.CLOSE_RIGHT, tab),
    closeOther: (tab?: RouteLocationNormalized) => handleTabAction(TableActionEnum.CLOSE_OTHER, tab),
    closeCurrent: () => handleTabAction(TableActionEnum.CLOSE_CURRENT),
    close: (tab?: RouteLocationNormalized) => handleTabAction(TableActionEnum.CLOSE, tab),
    setTitle: (title: string, tab?: DeepPartial<RouteLocationNormalized>) => updateTabTitle(title, tab),
    getTitle: (tab?: RouteLocationNormalized) => getTabTitle(tab),
    updatePath: (fullPath: string, tab?: RouteLocationNormalized) => updateTabPath(fullPath, tab),
    getCurrentTab
  };
}
