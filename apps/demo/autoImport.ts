import AutoImport from 'unplugin-auto-import/vite';

export function autoImport(root: string, autoImportOption?: any) {
  const defaultOption = {
    imports: [
      'vue',
      'vue-router/composables',
      'pinia',
      '@vueuse/core',
      {
        'vue-request': ['useRequest']
      },
      // {
      //  '@vft/router': ['useRouterHelper']
      // },
      {
        'pinia-plugin-persistedstate': ['createPersistedState']
      }
    ],
//    dts: resolve(root, './types/auto-imports.d.ts')
  };

  const imports = [...((autoImportOption?.imports as [])?.length ? autoImportOption?.imports as [] : []), ...defaultOption.imports];

  return AutoImport({ ...defaultOption, imports });
}
