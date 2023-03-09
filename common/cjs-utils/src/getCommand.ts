export function getCommand(packageManager: string, scriptName: string) {
  if (scriptName === 'install') {
    return packageManager === 'yarn' ? 'yarn' : `${packageManager} install`;
  }

  return packageManager === 'npm' ? `npm run ${scriptName}` : `${packageManager} ${scriptName}`;
}

// const userAgent = process.env.npm_config_user_agent ?? '';
// const packageManager = /pnpm/.test(userAgent) ? 'pnpm' : /yarn/.test(userAgent) ? 'yarn' : 'npm';
//
// console.log('\nDone. Now run:\n');
// if (root !== cwd) {
//   console.log(`  ${bold(green(`cd ${path.relative(cwd, root)}`))}`);
// }
// console.log(`  ${bold(green(getCommand(packageManager, 'install')))}`);
// console.log(`  ${bold(green(getCommand(packageManager, 'dev')))}`);
// console.log();
