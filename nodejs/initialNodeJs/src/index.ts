// import usando CommonJS
//const math = require('./math');

// importando somente algumas coisas
// import { divide, minus } from './math'

// importando tudo
import * as math from './math'
import validator from 'validator';

let n1: number = 2;
let n2: number = 2;

console.log(`PLUS: ${math.plus(n1, n2)}`);
console.log(`MINUS: ${math.minus(n1, n2)}`);
console.log(`DIVIDE: ${math.divide(n1,n2)}`);


console.log(validator.isEmail("joao@gmail.com"));
