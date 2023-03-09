import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  {
    title: 'error 测试',
    path: 'error-test'
  },
  {
    title: '右键菜单',
    path: 'context-menu',
    isIndex: true
  },
  {
    title: '字体加密测试',
    path: 'encryption'
  },
  {
    path: 'encryption'
  }
];

export default generateRoutes('/feat', '功能', list, {
  order: 111,
  dirName: 'demo'
});
