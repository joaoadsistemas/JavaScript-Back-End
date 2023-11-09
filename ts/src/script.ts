let num1 = document.getElementById("numero1") as HTMLInputElement
let num2 = document.getElementById("numero2") as HTMLInputElement
let btn = document.getElementById("calcular") as HTMLElement
let res = document.getElementById("resultado") as HTMLElement

function calc(n1: number, n2: number) {
    return n1 + n2;
}

btn.addEventListener('click', function() {
    res.innerHTML = calc(+num1.value, +num2.value).toString();
});

//////////////

let nomes: Array<string> = ["carlos", 'joao', 'luiz'];
let idades: Array<number> = [90, 20, 15];
let cores: string[] = ['azul','amarelo'];

idades.push(12);

idades.forEach(element => {
    console.log(element);
    
});

//////////////////

function firstLetterUpperCase(text: string) : string {
    let letter: string = text.charAt(0).toUpperCase();
    return letter + text.substring(1);
}

////////////////


class Car {

    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo
    }


}

let civic: Car = new Car("civic", "honda");

function resume(car: {marca: string, modelo: string}) : string {
    return `${car.marca} ${car.modelo}`;
}


////////////////

function showText(text: string, alignment: 'left' | 'right' | 'center'): string {
    return `<div style="text-align: ${alignment}">${text}</div>`
}

showText("joao", "left");

////////////////////////

type MathFunction = (n1: number, n2: number) => number;


const plus: MathFunction = (n1, n2) => {
    return n1 + n2;
} 

plus(2,3);

///////////////////








