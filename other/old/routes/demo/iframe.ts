import { generateRoutes } from '@/utils/router-helper';
import type { RouteItemExtendMeta } from '@vft/router';

const BlankPage = () => import('vc/src/web/layouts/blank.vue');

export const LINK_DYNAMIC_URL = '/iframe/dynamic';

const list: RouteItemExtendMeta[] = [
  {
    title: 'vue相关文档',
    path: 'vue',
    children: [
      {
        title: 'vue中文文档',
        frameSrc: 'https://cn.vuejs.org/',
        path: 'docs',
        component: BlankPage
      },
      { path: 'vue-router', frameSrc: 'https://router.vuejs.org/zh/', component: BlankPage },
      { path: 'pinia', frameSrc: 'https://pinia.vuejs.org/', component: BlankPage },
      { path: 'vue-use', frameSrc: 'https://vueuse.org/functions.html', component: BlankPage }
    ]
  },
  {
    title: '动态 iframe 页面跳转测试页面',
    path: 'dynamicIframeUrl'
  },
  {
    title: '动态 iframe 页面',
    path: LINK_DYNAMIC_URL + '/:url' + '/:title?',
    isIframe: true,
    hideInMenu: true,
    hideSide: true,
    component: BlankPage
  },
  { title: '外部链接-vip影视', path: 'https://www.ysgc.fun/' }
];

export default generateRoutes('/iframe', 'iframe & 外部链接', list, {
  dirName: 'demo'
});
