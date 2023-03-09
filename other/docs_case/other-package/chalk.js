const chalk = require('chalk');
const log = console.log

// 基本用法
log(chalk.blue.bgRed.underline.bold('Hello world!'));
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

// 可用来设置主题色
const error = chalk.bold.red;
const warning = chalk.keyword('blue');

log(error('Error!'));
log(warning('Warning!'));

// es6 写法
const obj = {
	totalPercent: 10,
	totalPercent1: 10
}

log(chalk`CPU: {red ${obj.totalPercent}%}CPU2: {red ${obj.totalPercent1}%}`);


/*
 chalk.hex('#DEADED').underline('Hello, world!')
 chalk.keyword('orange')('Some orange text')
 chalk.rgb(15, 100, 204).inverse('Hello!')

 chalk.bgHex('#DEADED').underline('Hello, world!')
 chalk.bgKeyword('orange')('Some orange text')
 chalk.bgRgb(15, 100, 204).inverse('Hello!')
 */
