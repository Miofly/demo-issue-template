import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

export const LINK_CURRENT_ACTIVE_PATH = '/router/route-meta/currentActivePath';
export const LINK_CURRENT_ACTIVE_PATH_INDEX = LINK_CURRENT_ACTIVE_PATH + '/index';

export const LINK_CURRENT_ACTIVE_PATH_DYNAMIC = LINK_CURRENT_ACTIVE_PATH + '/dynamic';
export const LINK_CURRENT_ACTIVE_PATH_KEEP_ALIVE = LINK_CURRENT_ACTIVE_PATH + '/keep-alive';
export const LINK_CURRENT_ACTIVE_PATH_NO_KEEP_ALIVE = LINK_CURRENT_ACTIVE_PATH + '/no-keep-alive';
export const LINK_CURRENT_ACTIVE_PATH_PARAMS = LINK_CURRENT_ACTIVE_PATH + '/params';
export const LINK_CURRENT_ACTIVE_PATH_QUERY = LINK_CURRENT_ACTIVE_PATH + '/query';

export const LINK_DYNAMIC_CURRENT_ACTIVE_PATH = '/router/route-meta/dynamicCurrentActivePath';
export const LINK_DYNAMIC_CURRENT_ACTIVE_PATH_CONTENT = LINK_DYNAMIC_CURRENT_ACTIVE_PATH + '/content';

export const CURRENT_ACTIVE_LIST = [
  {
    title: '动态路由',
    currentActivePath: LINK_CURRENT_ACTIVE_PATH_INDEX,
    path: LINK_CURRENT_ACTIVE_PATH_DYNAMIC,
    hideTab: true
  },
  {
    title: '使用 keepAive',
    currentActivePath: LINK_CURRENT_ACTIVE_PATH_INDEX,
    path: LINK_CURRENT_ACTIVE_PATH_KEEP_ALIVE,
    hideTab: true
  },
  {
    title: '不使用 keepAive',
    currentActivePath: LINK_CURRENT_ACTIVE_PATH_INDEX,
    path: LINK_CURRENT_ACTIVE_PATH_NO_KEEP_ALIVE,
    hideTab: true
  },
  {
    title: '路由 params',
    currentActivePath: LINK_CURRENT_ACTIVE_PATH_INDEX,
    path: LINK_CURRENT_ACTIVE_PATH_PARAMS,
    hideTab: true
  },
  {
    title: '路由 query',
    currentActivePath: LINK_CURRENT_ACTIVE_PATH_INDEX,
    path: LINK_CURRENT_ACTIVE_PATH_QUERY,
    hideTab: true
  }
];

const list: RouteItemExtendMeta[] = [
  {
    path: 'props',
    order: 2,
    children: [{ path: 'index' }, { path: 'props-boolean' + '/:id/:test' }, { path: 'props-child' }, { path: 'props-object' + '/:name/:age' }, { path: 'props-query' }]
  },
  {
    title: '测试路由信息',
    path: 'route-message'
  },
  { path: 'index' },
  { path: 'params' + '/:user?' + '/:id?', title: '动态参数' },
  { path: 'params-static' },
  {
    title: '路由 meta 参数演示',
    path: 'route-meta',
    order: 1,
    children: [
      {
        title: 'currentActivePath 的使用',
        path: LINK_CURRENT_ACTIVE_PATH,
        children: [
          {
            title: 'activePath下的主页面',
            path: LINK_CURRENT_ACTIVE_PATH_INDEX,
            generateComp: true,
            hideSide: true,
            children: CURRENT_ACTIVE_LIST
          }
        ]
      },
      {
        title: '组合健康',
        path: LINK_DYNAMIC_CURRENT_ACTIVE_PATH,
        isIndex: true,
        hideSide: true
        // children: [
        //   {
        //     title: '动态路由中 currentActivePath 的使用',
        //     path: LINK_DYNAMIC_CURRENT_ACTIVE_PATH_CONTENT + '/:id',
        //     realPath: LINK_DYNAMIC_CURRENT_ACTIVE_PATH_CONTENT,
        //     currentActivePath: LINK_DYNAMIC_CURRENT_ACTIVE_PATH,
        //     tabCount: 1,
        //     hideTab: true
        //   }
        // ]
      },
      {
        title: '隐藏子菜单',
        path: 'hideChildrenInMenu',
        children: [
          {
            path: 'root',
            hideChildrenInMenu: true,
            generateComp: true,
            children: [
              { path: 'child-one', hideParPath: true },
              {
                path: 'child-two',
                hideParPath: true
              }
            ]
          },
          {
            path: 'sub',
            children: [
              { path: 'sub-one', hideParPath: true },
              {
                path: 'sub-two',
                generateComp: true,
                hideParPath: true,
                hideChildrenInMenu: true,
                children: [
                  {
                    path: 'sub-two-child',
                    hideParPath: 2
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: '使用 keep-alive + affix',
        ignoreKeepAlive: false,
        affix: true,
        path: 'keep-alive'
      },
      {
        title: '不使用 keep-alive',
        path: 'no-keep-alive',
        ignoreKeepAlive: true
      },
      {
        title: '隐藏侧边栏',
        path: 'hide-side',
        hideSide: true
      },
      {
        title: '外链打开方式-替换当前页面',
        path: 'https://wangdoc.com',
        linkTarget: '_self'
      },
      {
        title: '无需 layout 的页面',
        path: 'isAlonePage',
        isAlonePage: true,
        linkTarget: '_blank'
      },
      {
        title: '动态路由',
        path: 'dynamic' + '/:id?',
        realPath: '/feat/route-meta/dynamic',
        tabCount: 2
      }
    ]
  }
];

export default generateRoutes('/router', '路由相关', list, {
  order: 2,
  dirName: 'apis'
});
