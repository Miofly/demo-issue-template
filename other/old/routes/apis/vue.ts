import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  {
    path: 'watch',
    isIndex: true
  }
];

export default generateRoutes('/vue', 'vue 相关', list, {
  order: 111,
  dirName: 'apis'
});
