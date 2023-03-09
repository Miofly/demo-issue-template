import { test } from './res/utils.js';
import test1 from './res/utils-default.js';
// import { csstest } from './res/index.css';

console.log(test);
console.log(test1);

import * as foo from './res/other.js'; // Can not find a declaration module for ...

console.log(foo);
// import { A, C } from 'randomLib';
import * as fs from "fs";

// console.log(fs, 888);

import { getArrayLength } from './commonjs'
console.log(getArrayLength, 888);
