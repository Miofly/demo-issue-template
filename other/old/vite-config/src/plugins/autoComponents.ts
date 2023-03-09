import { resolve, join } from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { getProRootPath } from '../utils';
import { existsSync } from 'fs-extra';

export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getSideEffects(partialName: string, compDirName: string) {
  const file = `${compDirName}/${kebabCase(partialName)}/index.sass`;
  if (existsSync(file)) {
    return file;
  }
  return '';
}

function customCompResolver(childDirName = 'common', prefix_name = 'Vri') {
  const compDirName = 'vri';
  return (name: string) => {
    const _name = prefix_name;
    if (name.startsWith(_name)) {
      const partialName = name.slice(_name.length);
      return {
        name: partialName,
        from: compDirName + '-ui',
        sideEffects: getSideEffects(partialName, compDirName)
      };
    }
  };
}

export function autoComponents(isAdmin: string | boolean | undefined, root: string) {
  const pkgPath = join(__dirname, '../../../..');
  const resolvers = isAdmin
    ? [
        ElementPlusResolver({
          directives: false
        }),
        customCompResolver('web')
      ]
    : [VantResolver(), customCompResolver('app')];

  return isAdmin
    ? Components({
        dirs: [
          resolve(root, 'src/components')
          // join(getProRootPath(root, 'admins'), 'packages/components/src/web'),
          // join(getProRootPath(root, 'admins'), 'packages/components/src/common'),
          // join(getProRootPath(root, 'admins'), 'packages/components/src/page')
        ],
        extensions: ['vue'],
        directoryAsNamespace: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: resolve(root, './types/components.d.ts'),
        resolvers,
        exclude: []
      })
    : Components({
        // 用于搜索组件的目录的相对路径。
        dirs: [
          resolve(root, 'src/components'),
          join(pkgPath, 'packages/components/src'),
          join(pkgPath, 'packages/business/components')

          // '/Users/miofly/Documents/mio/new-mio/project/wfly-monorepo/
        ],
        extensions: ['vue'],
        directoryAsNamespace: true,
        globalNamespaces: ['business'],
        resolvers,
        // 生成`components.d.ts` 全局声明 可配置 布尔值 或者文件路径
        dts: resolve(join(root, 'src/components'), './types/components.d.ts')
        // 组件的有效文件扩展名。
        // resolvers: [
        //   (name) => {
        //     if (name.startsWith('Vc')) {
        //       const partialName = name.slice(3);
        //       return {
        //         name: partialName,
        //         from: resolve(root, './node_modules/vc/src'),
        //         sideEffects: resolve(root, `./node_modules/vc/src/${partialName.toLowerCase()}/index.less`)
        //       };
        //     }
        //   }
        // ],
      });
}
