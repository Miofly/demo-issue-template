import { createProdMockServer } from '../plugin/vite-mock/es/createProdMockServer';

const modules = import.meta.glob('./**/*.ts', { eager: true });

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  // @ts-ignore
  mockModules.push(...modules?.[key]?.default);
});

/**
 * 在生产环境中使用。需要手动导入所有模块
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
