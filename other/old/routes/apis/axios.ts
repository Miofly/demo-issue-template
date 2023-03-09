import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  { path: 'index' },
  {
    path: 'md',
    component: () => import('@/views/apis/axios/05.javaScript的词法作用域.md')
  }
];

export default generateRoutes('/axios', 'axios 相关', list, {
  order: 111,
  dirName: 'apis'
});
