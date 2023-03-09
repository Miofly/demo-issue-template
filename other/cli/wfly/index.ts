#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { createProgram, deleteFile, renameFile, editFileContent, banner } from '@vri/cjs-utils';
import { create } from './src/commands/create';
import { createTemplate, TemplateEnum } from './src/commands/createTemplate';
import pkg from './package.json';

const program = new Command();

const cliName = pkg.name;

console.log();
console.log(banner('Wfly Tools'));

const actionsMap = {
  ['rename']: {
    alias: 'rn',
    action: async () => {
      await renameFile();
    }
  },
  ['delete <name>']: {
    alias: 'del',
    description: '删除文件操作相关',
    options: [
      ['-d, --dir', '是否是目录'],
      ['-m, --match', '是否精确匹配']
    ],
    action: async (name: string, cmd: any) => {
      await deleteFile(name, cmd);
    }
  },
  ['edit <name>']: {
    description: '编辑文件内容相关',
    options: [
      ['-c, --content <con>', '注入的内容: -c 要替换成的内容'],
      ['-m, --match', '是否精确匹配'],
      ['-f, --readFile <fileName>', '使用当前目录下某个文件的内容进行替换，输入文件名称: -f test.html'],
      ['-r, --replace [regExpContent...]', "使用正则表达式进行替换: -r '<%.*%>' 要替换成的文件内容 g"]
    ],
    action: async (name: string, cmd: any) => {
      await editFileContent(name, cmd);
    }
  },
  ['create <name>']: {
    // 创建模板
    description: '创建模板项目',
    alias: 'cr',
    action: async (name: TemplateEnum) => {
      await createTemplate(name);
    }
  },
  ['init [name]']: {
    // 创建模板
    description: '创建项目',
    options: [
      ['-f, --force', '是否强制覆盖目录'],
      ['-p, --phone <phone>', '手机号'],
      ['-d, --hasDemo <hasDemo>', '是否需要demo']
    ],
    action: async (name: string, cmd: any) => {
      console.log(`\n${banner('App Template - Fast Generate Template')}\n`);
      await create(name, cmd);
    }
  }
};

createProgram(actionsMap, program);

// program.version(`wfly-cli ${cliVersion}`).usage('<command> [option]');

/**
 * @description 监听 help 命令打印帮助信息
 * @author wfd
 * @date 2022/7/23 09:54
 * @example wfly-cli create --help
 */
program
  .on('--help', () => {
    console.log();
    console.log(`Run ${chalk.cyan(`${cliName} <command> --help`)} show detail`);
    console.log();
  })
  .parse(process.argv); // process.argv就是用户在命令行中传入的参数
