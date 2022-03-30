// operador de reposo el cual puede extaer las propiedades de un objeto que aun no se ha construido,
const obj = {
  name: "oscar",
  age: 32,
  country: "COL",
};
let { name, ...all } = obj;
console.log(name, all);

let { country, ...all } = obj;
console.log(all);

// propiedades de propagacion
const obj = {
  name: "oscar",
  age: 32,
};
const obj1 = {
  ...obj,
  country: "COL",
};
console.log(obj1);
//promise.finaly podemos saber cuando ha terminado el llamado y poder ejecutar alguna funcion o logica de codigo sejun sea el caso.
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('test Error'))
    })
};
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finalizo'))

// COMO AGRUPAR BLOQUES DE REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month,day);
