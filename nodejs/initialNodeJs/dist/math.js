"use strict";
// export usando CommonJS
//module.exports.plus = plus;
//module.exports.minus = minus;
//module.exports.divide = divide;
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.minus = exports.plus = void 0;
// export é usado para exportas no ES6
function plus(x, y) {
    return x + y;
}
exports.plus = plus;
function minus(x, y) {
    return x - y;
}
exports.minus = minus;
function divide(x, y) {
    return x / y;
}
exports.divide = divide;
