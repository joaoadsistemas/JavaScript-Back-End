// export usando CommonJS
//module.exports.plus = plus;
//module.exports.minus = minus;
//module.exports.divide = divide;


// export é usado para exportas no ES6

export function plus(x: number, y: number): number {
    return x + y;
}

export function minus(x: number, y: number): number {
    return x - y;
}

export function divide(x: number, y: number): number {
    return x / y;
}