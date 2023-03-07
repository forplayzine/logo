// Manual test entry point for a library.
import  fs from 'fs';
import {getLogo} from '../src/index';
const filePath = 'test.svg';


console.log("make logo");

const svg = getLogo();

fs.writeFileSync(filePath, svg);
