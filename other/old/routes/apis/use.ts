import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  {
    path: 'comp-use',
    title: '组件 hooks 相关',
    children: [{ path: 'use-global-config' }, { path: 'use-namespace' }, { path: 'use-tab' }]
  },
  {
    path: 'vc-use',
    title: '公共 use',
    children: [
      {
        path: 'use-context',
        isIndex: true
      }
    ]
  }
];

export default generateRoutes('/use', 'hooks 相关', list, {
  order: 111,
  dirName: 'apis'
});
