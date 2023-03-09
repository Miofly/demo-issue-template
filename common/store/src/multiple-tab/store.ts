import { getRawRoute, getRouteKeyAttrs, getRouterKeyPath, useRouterHelper } from '@vft/router';
import { isEmptyObject } from '@vft/utils';

import { isEqual, omit, uniqWith } from 'lodash';
import { defineStore, type Pinia } from 'pinia';
import { nextTick, toRaw, unref } from 'vue';
import type { RouteLocationNormalized, RouteLocationRaw, Router } from 'vue-router';

export interface MultipleTabState {
  cacheTabList: Set<string>;
  tabList: RouteLocationNormalized[];
  lastDragEndIndex: number;
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean;
  /** 页面加载状态 */
  pageLoading: boolean;
}

/**
 * @description 使用 useRouteHelp 的 replace 方式跳转
 * @author wfd
 * @date 2021/12/30 21:43
 * @example
 * @param router
 * @param path
 */
function handleGotoPage(router: Router, path: string) {
  const { go } = useRouterHelper(router);
  go(path, true);
}

/**
 * @description 获取目标路由的一些参数信息
 * @author wfd
 * @date 2021/12/30 18:39
 * @example
 * @param tabItem
 */
const getToTarget = (tabItem: RouteLocationNormalized) => {
  // 从 tabItem 中解构出以下参数，留作跳转使用
  const { params, path, query } = tabItem;
  return {
    params: params || {},
    path,
    query: query || {}
  };
};

let timeId: TimeoutHandle;

/**
 * @description 多 tab 标签页全局状态
 * @author wfd
 * @date 2021/11/24 19:36
 * @example
 */
export const useMultipleTabStore = defineStore({
  id: 'app-multiple-tab',
  persist: {
    paths: ['tabList']
  },
  state: (): MultipleTabState => ({
    // 需要 KeepAlive 缓存的标签
    cacheTabList: new Set(),
    // 多标签列表
    tabList: [],
    // 最后一次被拖动 tab 标签的索引
    lastDragEndIndex: 0,
    reloadFlag: true,
    // 页面 loading 状态
    pageLoading: false
  }),
  getters: {
    /** 获取多 tab 标签列表 */
    getTabList(): RouteLocationNormalized[] {
      return this.tabList;
    },
    getPageLoading(): boolean {
      return this.pageLoading;
    },
    getReloadFlag(): boolean {
      return this.reloadFlag;
    },
    /** 获取多 tab 需要 KeepAlive 缓存的标签列表 */
    getCachedTabList(): string[] {
      // 将 this.cacheTabList 的 Set 集合转成 数组集合
      return Array.from(this.cacheTabList);
    },
    /** 获取最后一次被拖动 tab 标签的索引 */
    getLastDragEndIndex(): number {
      return this.lastDragEndIndex;
    }
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
    // 使用定时器控制 loading 防止多次触发闪烁
    async setPageLoadingAction(loading: boolean): Promise<void> {
      if (loading) {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
          this.setPageLoading(loading);
        }, 50);
      } else {
        this.setPageLoading(loading);
        clearTimeout(timeId);
      }
    },
    async refreshPage(duration = 0, router: Router, clickTab?: RouteLocationNormalized) {
      this.setPageLoading(true);
      this.reloadFlag = false;
      await nextTick();
      if (duration) {
        setTimeout(() => {
          this.setPageLoading(false);
          this.reloadFlag = true;
        }, duration);
      } else {
        this.setPageLoading(false);
        this.reloadFlag = true;
      }

      if (clickTab) {
        handleGotoPage(router, (clickTab?.meta?.hideActiveRoute as RouteLocationNormalized)?.fullPath || clickTab?.fullPath || clickTab?.path);
      }
    },
    // update keepalive tabs
    updateCacheTab() {
      const cacheMap: Set<string> = new Set();

      // in order to have repeat tabs
      const uniqTabs = uniqWith(this.tabList, (arrVal, oldVal) => {
        return isEqual(getRouteKeyAttrs(arrVal), getRouteKeyAttrs(oldVal));
      });
      if (uniqTabs?.length !== this.tabList.length) {
        this.tabList = uniqTabs;
      }
      // tabList 相当于一个路由信息的数组集合
      for (const tab of this.tabList) {
        // 经过 getRawRoute 处理后的 tab 信息，每一个 tab 相当于一个 路由信息
        const item = getRawRoute(tab);
        // 是否需要 KeepAlive 缓存 needCache === true 代表不需要 false 代表需要 KeepAlive 缓存
        const needCache = !item.meta?.ignoreKeepAlive;
        if (!needCache) {
          continue;
        }

        // 获取每个路由对应的唯一 name 名称
        const name = item.name as string;
        name && cacheMap.add(name);
      }
      // 将打开的且不需要 KeepAlive 缓存的 tab 的 name 存放到 cacheTabList 中
      this.cacheTabList = cacheMap;
    },
    /** 清除所有缓存的 tab */
    clearCacheTabs(): void {
      this.cacheTabList = new Set();
    },
    /**
     * @description 重置多 tab 状态，将 tabList 清空，同时清楚所有缓存的 tab
     */
    resetState(): void {
      this.tabList = [];
      this.clearCacheTabs();
    },
    async addTab(route: RouteLocationNormalized, fromRoute?: RouteLocationNormalized, activeTabIndex?: number, hideActiveRoute?: RouteLocationNormalized) {
      const { path, fullPath, params, query, meta, hash } = getRawRoute(route);

      let updateIndex = -1;
      // the tab whether already exist
      const tabHasExist = this.tabList.some((item, index) => {
        updateIndex = index;
        return getRouterKeyPath(item) === getRouterKeyPath(route);
      });

      if (tabHasExist) {
        const curTab = toRaw(this.tabList)[updateIndex];

        if (!curTab) {
          return;
        }
        // 更新当前 tab 的 params query fullPath 等信息
        curTab.params = params || curTab.params;
        curTab.query = query || curTab.query;
        curTab.fullPath = fullPath || curTab.fullPath;
        curTab.hash = hash || curTab.hash;

        if (hideActiveRoute) {
          curTab.meta.hideActiveRoute = omit(hideActiveRoute, ['matched']);
        }
        this.tabList.splice(updateIndex, 1, curTab);
      } else {
        // 如果当前 router 不在 tabList 中则添加 tab
        // 获取动态路由打开数，超过 0 即代表需要控制打开数
        const tabCount = meta?.tabCount ?? -1;

        if (tabCount > 0) {
          const realPath = meta?.realPath ?? '';

          // 关闭逻辑
          if (query && !isEmptyObject(query)) {
            // tip ?? ()
            if (this.tabList.filter((e) => (e.path ?? '') === path).length >= tabCount) {
              const index = this.tabList.findIndex((item) => item.path === path);
              index !== -1 && this.tabList.splice(index, 1);
            }
          }
          // tip ?? ()
          else if (this.tabList.filter((e) => (e.meta?.realPath ?? '') === realPath).length >= tabCount) {
            const index = this.tabList.findIndex((item) => item.meta.realPath === realPath);
            index !== -1 && this.tabList.splice(index, 1);
          }
        }

        if (hideActiveRoute) {
          route.meta.hideActiveRoute = omit(hideActiveRoute, ['matched']);
        }

        // 将当前传入的 route 对象 push 到 this.tabList 标签列表中
        if (!fromRoute || fromRoute?.meta?.addTabInEnd) {
          this.tabList.push(route);
        } else {
          this.tabList.splice((activeTabIndex ?? 0) + 1, 0, route);
        }
      }

      this.updateCacheTab();
    },
    async closeTab(tab: RouteLocationNormalized, router: Router) {
      const close = (route: RouteLocationNormalized) => {
        const { fullPath, path, meta: { affix, currentActivePath } = {} } = route;
        if (affix) {
          return;
        }
        const index = this.tabList.findIndex((item) => (item.fullPath || item.path) === (currentActivePath || fullPath || path));
        index !== -1 && this.tabList.splice(index, 1);
        this.updateCacheTab();
      };

      const { currentRoute, replace } = router;
      const {
        fullPath,
        path,
        meta: { currentActivePath }
      } = unref(currentRoute);

      if (currentActivePath) {
        if (currentActivePath !== (tab.fullPath || tab.path)) {
          close(tab);
          return;
        }
      } else {
        if (fullPath !== (tab.fullPath || tab.path)) {
          close(tab);
          return;
        }
      }

      // 以下为关闭当前激活的 tab 标签的逻辑
      let toTarget: RouteLocationRaw = {};
      // 根据 path 找出当前标签在 this.tabList 中的位置
      const index = this.tabList.findIndex((item) => (item.fullPath || item.path) === (currentActivePath || fullPath || path));

      // 如果当前选项卡是最左边的选项卡，拖动排序可把选项卡排到最左边
      if (index === 0) {
        // 只有一个选项卡，然后跳转到主页，否则跳转到右侧选项卡
        if (this.tabList.length === 1) {
          toTarget = '/';
        } else {
          // 跳转到右边的选项卡
          const page = this.tabList[index + 1];
          // 将 target 设置为右侧选项卡的相关信息 包含 {params path query} 三个参数
          toTarget = getToTarget(page);
        }
      } else {
        // 关闭的选项卡是当前选项卡，且不是第一个
        const page = this.tabList[index - 1];
        // 将 target 设置为右侧选项卡的相关信息 包含 {params path query} 三个参数
        toTarget = getToTarget(page);
      }
      // 调用 close 关闭选项卡
      close(currentRoute.value);

      await replace(toTarget);
    },
    // close tab by path
    async closeTabByKey(targetPath: string, router: Router) {
      const index = this.tabList.findIndex((item) => getRouterKeyPath(item) === targetPath);
      // the targetPath in tabList
      if (index !== -1) {
        await this.closeTab(this.tabList[index], router);
        const { currentRoute, replace } = router;

        // 检查当前路由是否存在于tabList中
        const isActivated = this.tabList.findIndex((item) => {
          return item.fullPath === currentRoute.value.fullPath;
        });

        // 如果当前路由不存在于TabList中，尝试切换到其它路由
        if (isActivated === -1) {
          let pageIndex;
          if (index > 0) {
            pageIndex = index - 1;
          } else if (index < this.tabList.length - 1) {
            pageIndex = index + 1;
          } else {
            pageIndex = -1;
          }
          if (pageIndex >= 0) {
            const page = this.tabList[index - 1];
            const toTarget = getToTarget(page);
            await replace(toTarget);
          }
        }
      }
    },
    async closeLeftTabs(router: Router, clickTab: RouteLocationNormalized) {
      const { clickIndex, jumpPath } = this.getCloseTabInfo(router, clickTab);
      const leftTabs = this.tabList.slice(0, clickIndex);
      this.closeJump(this.getClosePaths(leftTabs), router, jumpPath);
    },
    async closeRightTabs(router: Router, clickTab: RouteLocationNormalized) {
      const { clickIndex, jumpPath } = this.getCloseTabInfo(router, clickTab);
      const rightTabs = this.tabList.slice(clickIndex + 1, this.tabList.length);
      this.closeJump(this.getClosePaths(rightTabs), router, jumpPath);
    },
    async closeOtherTabs(router: Router, clickTab: RouteLocationNormalized) {
      const { targetPath, jumpPath } = this.getCloseTabInfo(router, clickTab);
      const openTabPathList = this.tabList.map((item) => item.fullPath || item.path);

      const pathList: string[] = [];

      for (const path of openTabPathList) {
        // 当 path 不等于当前路由的 fullPath 才会执行
        if (path !== targetPath) {
          const closeItem = this.tabList.find((item) => (item.fullPath || item.path) === path);
          if (!closeItem) {
            // 代表跳出本次循环，进入下一次循环
            continue;
          }
          const affix = closeItem?.meta?.affix ?? false;
          if (!affix) {
            pathList.push(closeItem.fullPath);
          }
        }
      }
      this.closeJump(pathList, router, jumpPath);
    },
    async closeAllTab(router: Router) {
      this.tabList = this.tabList.filter((item) => item?.meta?.affix ?? false);
      this.clearCacheTabs();
      this.goToPage(router);
    },
    /** 关闭全部 tab 的跳转行为 */
    goToPage(router: Router) {
      const { go } = useRouterHelper(router);
      const { fullPath, path } = unref(router.currentRoute);

      const tabIndex = this.tabList.findIndex((item) => (item.fullPath || item.path) === (fullPath || path));

      let toPath = '/';

      if (tabIndex !== -1) {
        toPath = this.tabList[tabIndex].fullPath || this.tabList[tabIndex].path;
      }

      (fullPath || path) !== toPath && go(toPath, true);
    },
    /** 批量关闭选项卡 */
    async bulkCloseTabs(pathList: string[]) {
      // 将 this.tabList 进行一次过滤，通过判断 item.fullPath 是否在 pathList 里面，将不在里面 item 项返回
      this.tabList = this.tabList.filter((item) => !pathList.includes(item.fullPath));
    },
    async setTabTitle(title: string, route: RouteLocationNormalized) {
      const findTab = this.getTabList.find((item) => {
        if ((item.meta?.hideActiveRoute as RouteLocationNormalized)?.fullPath && route.meta?.currentActivePath) {
          return getRouterKeyPath(item) === route.meta.currentActivePath;
        } else {
          return getRouterKeyPath(item) === getRouterKeyPath(route);
        }
      });
      if (findTab) {
        findTab.meta.title = title;
        await this.updateCacheTab();
      }
    },
    async updateTabPath(fullPath: string, route: RouteLocationNormalized) {
      const findTab = this.getTabList.find((item) => item === route);
      if (findTab) {
        findTab.fullPath = fullPath;
        findTab.path = fullPath;
        await this.updateCacheTab();
      }
    },
    /**
     * @description getCloseTabInfo
     * @returns
     * - jumpPath: the path that jump after close
     * - clickIndex: current click tab index in tabList
     * - targetPath: get close unique path
     * @param router
     * @param clickTab
     */
    getCloseTabInfo(router: Router, clickTab: RouteLocationNormalized) {
      const currentRoute = router.currentRoute;

      let jumpPath = '';

      const targetPath = getRouterKeyPath(clickTab) || getRouterKeyPath(currentRoute.value);

      if (currentRoute.value.meta?.currentActivePath) {
        jumpPath = currentRoute.value.fullPath || currentRoute.value.path;
      } else {
        jumpPath = clickTab
          ? (clickTab.meta?.hideActiveRoute as RouteLocationNormalized)?.fullPath || (clickTab.meta?.hideActiveRoute as RouteLocationNormalized)?.path || clickTab.fullPath || clickTab.path
          : currentRoute.value.fullPath || currentRoute.value.path;
      }
      const clickIndex = this.tabList.findIndex((item) => getRouterKeyPath(item) === targetPath);

      return { jumpPath, clickIndex, targetPath };
    },
    getClosePaths(tabs) {
      const pathList: string[] = [];
      for (const item of tabs) {
        const affix = item?.meta?.affix ?? false;
        if (!affix) {
          pathList.push(item.fullPath);
        }
      }
      return pathList;
    },
    closeJump(pathList, router, jumpPath) {
      this.bulkCloseTabs(pathList);
      this.updateCacheTab();
      handleGotoPage(router, jumpPath);
    },
    async sortTabs(oldIndex: number, newIndex: number) {
      const currentTab = this.tabList[oldIndex];
      this.tabList.splice(oldIndex, 1);
      this.tabList.splice(newIndex, 0, currentTab);
      // update lastDragEndIndex
      this.lastDragEndIndex = this.lastDragEndIndex + 1;
    }
  }
});

export function useMultipleTabWithOut(pinia: Pinia) {
  return useMultipleTabStore(pinia);
}
