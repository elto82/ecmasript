// antes de es6
function newFuntion(name, age, country) {
    var name = name || "antonio";
    var age = age || 40;
    var country = country || "MX";
    console.log(name, age, country);
}

// con es6
function newFuntion2(name = "argiro", age = 40, country = "col") {
    console.log(name, age, country);
}

newFuntion2();
newFuntion2("andres", 25, "MEX");

//
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
//
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilinea antes
let lorem = "primera frase \n" + "otra frase.";
// console.log(lorem);

// con es6
let lorem2 = `frase con es6
otra frase con es6`;
console.log(`${lorem} ${lorem2}`);

// destructuración de elementos
let person = {
    name: "antonio",
    age: 40,
    country: "COL",
};
console.log(person.name, person.age, person.country);
// con es6
let { name, age, country } = person;
console.log(name, age, country);

// propagacion

let team1 = ["antonio", "andres", "falcao"];
let team2 = ["james", "mateo", "julian"];

let edutation = ["argiro", ...team1, ...team2];
console.log(edutation);

// definicion de variables let solo se utiliza donde fue creado, var es a nivel global
{
    var globalVar = "global var";
}

{
    let globalLet = "global let";
    console.log(globalLet);
}
console.log(globalVar);
console.log(globalLet);

// es6 const no permite cambiar el valor
const a = "b";

// propiedad de objetos  es5
let name1 = "antonio";
let age1 = 40;

obj = { name1: name1, age1: age1 };
// es6
obj2 = { name1, age1 };
console.log(obj2);

// funciones de tipo flecha ------------------------------------------------
const names = [
    {
        name: "oscar",
        age: 32,
    },
    {
        name: "yesica",
        age: 27,
    },
];
// funcion con la cual la recorre y muestra en consola
let listOfNames = names.map(function (item) {
    console.log(item.name);
});
// funcion con la cual la recorre y muestra en consola es6
let listOfNames2 = names.map(item => console.log(item.name));

//otra forma
const listOfNames3 = (name, age,) => {
    ...
}
//otra forma
const listOfNames4 = name => {
    ...
}
//otra forma, se asigna valor y retorna el valor
const square = num => num * num;

//las promesas--------------------------------------------------------------------------------
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!');
        } else {
            reject ('ups!!');
        }
    });
}
helloPromise()
.then(Response => console.log(Response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

// clases ----------------------------------------------------------------------------
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

// import y export con modulos para separar la logica
import {hello} from './module';
hello();

// generator es una funsion especial que retorna unos valores segun el algoritmo definido
function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'world';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

