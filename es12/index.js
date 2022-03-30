// remplazar valores , solo remplaza el primer valor encontrado
const string = 'JavaScript es maravilloso con JavaScript puedo crear el futuro de la web, JavaScript';
const replacedString = string.replace('javaScript','Python');
console.log(replacedString);

const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2);

// metodos privados para las clases
class Message {
  #show(val) {
    console.log("HI!");
  };
  get #add(val) {
      ...
  }
}

const message = new Message();
message.show('holaaaaaaaaa!');


const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response));


////////////////////////////////////////////////////////
class anyClass {
    constructor(elemento){
        this.ref = new WeakRef(elemento)
    }
    {...}
}

///operadores de asignacion
let isTrue = true;
let isfalse = false;
console.log(isTrue &&= isfalse);

let isTrue = true;
let isfalse = false;
console.log(isTrue ||= isfalse);

let isTrue = undefined;
let isfalse = false;
console.log(isTrue ??= isfalse);