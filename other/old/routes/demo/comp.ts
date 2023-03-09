import type { RouteItemExtendMeta } from '@vft/router';
import { generateRoutes } from '@/utils/router-helper';

const list: RouteItemExtendMeta[] = [
  {
    title: '头像',
    path: 'avatar',
    isIndex: true
  },
  {
    title: '回到顶部',
    path: 'back-top',
    isIndex: true
  },
  {
    title: '分割线',
    path: 'divider',
    isIndex: true
  },
  {
    title: '表单',
    path: 'form',
    isIndex: true
  },
  {
    title: '图标',
    path: 'icon',
    isIndex: true
  },
  {
    title: '图片',
    path: 'image',
    isIndex: true
  },
  {
    title: '输入框',
    path: 'input',
    isIndex: true
  },
  {
    title: '链接',
    path: 'link',
    isIndex: true
  },
  {
    title: '弹窗',
    path: 'popover',
    isIndex: true
  },
  {
    title: '二维码',
    path: 'qrcode',
    isIndex: true
  },
  {
    title: '结果页',
    path: 'result',
    isIndex: true
  },
  {
    title: '多标签',
    path: 'tabs',
    isIndex: true
  },
  {
    path: 'toolTip',
    isIndex: true
  }
];

export default generateRoutes('/comp', '组件演示', list, {
  order: 111,
  dirName: 'demo'
});
