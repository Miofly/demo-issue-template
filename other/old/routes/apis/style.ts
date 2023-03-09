import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  {
    path: 'css',
    children: [
      {
        path: 'transform'
      },
      {
        path: 'translate3d'
      },
      {
        path: 'transition',
        isIndex: true
      },
      {
        path: 'gird',
        children: [
          { path: 'area' },
          { path: 'auto-columns-rows' },
          { path: 'auto-flow' },
          { path: 'content' },
          { path: 'index' },
          { path: 'items' },
          { path: 'row-column-start-end' },
          { path: 'self' }
        ]
      }
    ]
  },
  {
    path: 'scss',
    isIndex: true
  }
];

export default generateRoutes('/style', '样式相关', list, {
  order: 111,
  dirName: 'apis'
});
