import ora from 'ora';
import path from 'path';
import fs from 'fs-extra';
import ejs from 'ejs';
import { execa, execaCommand } from 'execa';
import { PageEnum, RequestProps } from './types';

const GIT_REPO = 'https://gitee.com/miofly/apps-template';

export async function downRepo(props: RequestProps) {
  const { projectName, pageType, phone, hasDemo } = props;

  //   const FILENAME = typeof __filename !== 'undefined' ? __filename : (/^ +at (?:file:\/*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) || '')[1];
  //   const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\].*?$/, '');

  const spinner = ora('loading...');
  spinner.start();
  await execa('git', ['clone', GIT_REPO, projectName], { cwd: './' });

  let author;
  await execaCommand('git config --global user.name')
    .then((res) => {
      author = res.stdout;
    })
    .catch(() => {
      author = '';
    });

  const gitProPath = path.join(process.cwd(), projectName);
  const gitFilePath = path.join(gitProPath, '.git');
  const gitIgnoreFilePath = path.join(gitProPath, '.gitignore');
  const gitPagePath = path.join(gitProPath, 'src/pages/test-one');
  const gitCompPath = path.join(gitProPath, 'src/components/base-demo.vue');
  const gitApiPath = path.join(gitProPath, 'src/apis/index.ts');
  const gitAppFilePath = path.join(gitPagePath, 'App.vue');
  const gitMainTsFilePath = path.join(gitPagePath, 'main.ts');
  const gitPkgFilePath = path.join(gitProPath, 'package.json');

  if (fs.existsSync(gitFilePath)) {
    fs.removeSync(gitFilePath);
  }

  if (fs.existsSync(gitIgnoreFilePath)) {
    fs.removeSync(gitIgnoreFilePath);
  }

  const gitPkgFileCon = fs.readFileSync(gitPkgFilePath);
  const data = ejs.render(gitPkgFileCon.toString(), { packname: projectName, author });
  fs.writeFileSync(gitPkgFilePath, data);

  const gitMainTsFileCon = fs.readFileSync(gitMainTsFilePath);
  const dataMainTs = ejs.render(gitMainTsFileCon.toString(), { phone });
  fs.writeFileSync(gitMainTsFilePath, dataMainTs);

  if (!hasDemo) {
    await fs.writeFile(
      gitAppFilePath,
      '<template>\n' +
        '\n' +
        '</template>\n' +
        '\n' +
        '<script lang="ts" setup>\n' +
        '\n' +
        '</script>\n' +
        '\n' +
        '<style lang="less" scoped>\n' +
        '\n' +
        '</style>'
    );
    await fs.remove(gitCompPath);
    await fs.writeFile(gitApiPath, '');
  }

  // eslint-disable-next-line
  if (pageType == PageEnum.SINGLE) {
    success(spinner);
  }

  // eslint-disable-next-line
  if (pageType == PageEnum.PAGE) {
    await fs.copy(gitPagePath, gitProPath + '_old', {
      overwrite: true
    });
    await fs.remove(gitProPath);
    await fs.rename(gitProPath + '_old', gitProPath);
    success(spinner);
  }
}

function success(spinner) {
  spinner.succeed('Success');
}
