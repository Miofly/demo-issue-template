import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  {
    path: 'comp-utils',
    title: '组件 utils 相关',
    children: [{ path: 'error' }]
  },
  {
    path: 'common',
    title: '公共 utils',
    children: [{ path: 'upperCamelCase' }, { path: 'cache' }, { path: 'navigator' }]
  },
  {
    path: 'lodash',
    children: [
      {
        title: '小驼峰camelCase',
        path: 'camelCase'
      },
      { path: 'kebabCase' },
      { path: 'snakeCase' }
    ]
  }
];

export default generateRoutes('/utils', 'utils 相关', list, {
  order: 111,
  dirName: 'apis'
});
