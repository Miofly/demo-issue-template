import { execaCommandSync, execaSync } from 'execa';
import { buildFileNames } from '../buildConfig';
import getCurrentBranchName from 'node-git-current-branch';

async function runScript(name: any, script: string) {
  const appPath = name ? `../apps/${name}/**` : '../apps/**';

  execaSync('pnpm', ['--filter', appPath, script], {
    stdio: 'inherit',
    preferLocal: true
  });
}

export async function run(command) {
  const isDev = getCurrentBranchName() === 'dev';

  const main = async () => {
    if (!buildFileNames?.length || isDev) {
      await execaCommandSync('rimraf -r ../apps/dist');
      runScript('', command);
      return;
    }

    const rmStaticDir = [];
    for (const item of buildFileNames) {
      if (!item.includes('/')) {
        rmStaticDir.push(item);
      } else {
        rmStaticDir.push(item.split('/')[1]);
      }
    }

    for (let i = 0; i < buildFileNames.length; i++) {
      await execaCommandSync(`rimraf -r ../apps/dist/static/${rmStaticDir[i]}`);
      runScript(buildFileNames[i], command);
    }
  };

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

// const { stdout: appsDir } = await execaCommand('pwd', { cwd: '../apps' });
