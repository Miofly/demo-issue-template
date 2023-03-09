import prompts from 'prompts';
import { canSkipEmptying } from '@vri/cjs-utils';
import { red, green, bold } from 'kolorist';
import path from 'node:path';
import { downRepo } from './utils';
import { PageEnum } from './types';
import fs from 'fs-extra';

/**
 * 由以下的示例可以看出
 * - 如果只有一个 - exp. -x 3 ---> x:3
 * - 如果这两个值紧贴
 * 1. 后面的是数字 exp. -x344 ---> x:344，-2=aaa ---> '2': '=aaa'
 * 2. 后面的是字母活符号 exp. -xa! --->  x: true, a: true, '!': true
 * - 如果是两个 -- exp. --xa! 123 ---->  _: [ 123 ], 'xa*': true
 * - 两个 -- 后面加 = exp. --xa!=123 ----> 'xa!': 123
 * - 其他单独的没有 - 的字符都会放到数组中
 * - 只有 - 的字符值为 true
 * node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop  baz foo bar
 * { _: [ 'foo', 'bar', 'baz' ],
 *   x: 3,
 *   y: 4,
 *   n: 5,
 *   a: true,
 *   b: true,
 *   c: true,
 *   beep: 'boop' }
 */
// import minimist from 'minimist';

export async function create(projectName: string, options: any) {
  const cwd = process.cwd();

  // const argv = minimist(process.argv.slice(2));
  // 相当于我假设命令行中输入的非参数的字符串就是项目名称
  // let projectName = argv._[0];
  // const defaultProjectName = !projectName ? 'app-project' : projectName;
  // const forceOverwrite = argv.force;
  const forceOverwrite = options.force;

  const defaultProjectName = !projectName ? 'app-project' : projectName;

  let result: {
    _projectName?: string;
    phone?: string;
    shouldOverwrite?: boolean;
    hasDemo?: boolean | string;
    pageType?: PageEnum | string;
  };

  try {
    result = await prompts(
      [
        {
          name: '_projectName',
          type: projectName ? null : 'text',
          message: 'Project name:',
          initial: defaultProjectName,
          onState: (state) => (projectName = String(state.value).trim() || defaultProjectName)
        },
        // 判断是否可以覆盖
        {
          name: 'shouldOverwrite',
          type: () => (canSkipEmptying(projectName) || forceOverwrite ? null : 'toggle'),
          message: () => {
            const dirForPrompt = projectName === '.' ? '当前目录' : `目标目录 "${projectName}"`;

            return `${dirForPrompt} 不是空的. 是否删除现有目录并继续?`;
          },
          initial: false,
          active: 'Yes',
          inactive: 'No'
        },
        // 如果不让覆盖提示报错
        {
          name: 'overwriteChecker',
          type: (prev, values) => {
            // @ts-ignore
            if (values.shouldOverwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled');
            }
            return null;
          }
        },
        {
          name: 'pageType',
          type: 'select',
          message: '请选择项目模板',
          choices: [
            { title: '单项目', value: String(PageEnum.SINGLE) },
            { title: 'pages页面(App.vue,main.ts)', value: String(PageEnum.PAGE) }
          ]
        },
        {
          name: 'phone',
          type: () => (options?.phone ? null : 'text'),
          message: '请输入手机号(用于获取token)'
        },
        {
          type: () => (options?.hasDemo ? null : 'toggle'),
          name: 'hasDemo',
          message: '是否需要示例代码',
          initial: false,
          active: 'Yes',
          inactive: 'No'
        }
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled');
        }
      }
    );

    const {
      _projectName = projectName,
      shouldOverwrite = options.force,
      phone = options.phone,
      pageType,
      hasDemo = options.hasDemo === 'yes'
    } = result;

    const root = path.join(cwd, _projectName);

    console.log(`\n脚手架项目正在创建 ${root} ...`);

    const params = { projectName, pageType: pageType as PageEnum, phone, hasDemo };

    if (fs.existsSync(root) && shouldOverwrite) {
      await fs.remove(root).then(async () => {
        await downRepo(params);
      });
    } else {
      await downRepo(params);
    }

    // eslint-disable-next-line
    if (pageType == PageEnum.SINGLE) {
      console.log('Now run:\n');
      if (root !== cwd) {
        console.log(`  ${bold(green(`cd ${path.relative(cwd, root)}`))}`);
      }
      console.log(`  ${bold(green('pnpm install'))}`);
      console.log(`  ${bold(green('pnpm dev'))}`);
      console.log();
    }
  } catch (cancelled) {
    console.log(cancelled.message);
    process.exit(1);
  }
}
