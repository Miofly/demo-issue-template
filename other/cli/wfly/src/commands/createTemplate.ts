import { banner } from '@vri/cjs-utils';
import fs from 'fs-extra';
import path from 'path';

function copyTemplate(source: string, dest: string) {
  // @ts-ignore
  const FILENAME = typeof __filename !== 'undefined' ? __filename : (/^ +at (?:file:\/*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) || '')[1];
  const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\].*?$/, '');

  fs.copySync(path.join(DIRNAME, source), dest, {
    overwrite: true
  });
}

export enum TemplateEnum {
  TSCONFIG_VUE = 'tsv',
  TSCONFIG_NODE = 'tsn',
  TSCONFIG_VITE = 'tsvt',
  TSCONFIG_WEB = 'tsw',
  LINT = 'lint',
  GIT = 'git',
  PACKAGE = 'pkg'
}

export async function createTemplate(name: TemplateEnum) {
  const cwd = process.cwd();

  const TEMP_DIR = '../template/';
  const templateMap = new Map([
    [TemplateEnum.TSCONFIG_VUE, ['tsconfig/tsconfig.vue.json', '/tsconfig.json']],
    [TemplateEnum.TSCONFIG_NODE, ['tsconfig/tsconfig.node.json', '/tsconfig.json']],
    [TemplateEnum.TSCONFIG_VITE, ['tsconfig/tsconfig.vite.json', '/tsconfig.json']],
    [TemplateEnum.TSCONFIG_WEB, ['tsconfig/tsconfig.web.json', '/tsconfig.json']],
    [TemplateEnum.LINT, ['lint', '']],
    [TemplateEnum.GIT, ['lint/.gitignore', '/.gitignore']],
    [TemplateEnum.PACKAGE, ['package-template.json', '/package.json']]
  ]);

  const template = templateMap.get(name);

  if (template) {
    copyTemplate(TEMP_DIR + template[0], cwd + template[1]);
    console.log(`\n${banner('Success')}\n`);
  }
}
