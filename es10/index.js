let array = [1,2,3, [4,5,6, [7,8,9]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

// eliminar los espacios en blanco de un stirng
let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());

// eliminar los espacios al final del texto
let hello = 'hello world           ';
console.log(hello);
console.log(hello.trimEnd());

// podemos para el valor de error en catch
try {
    
} catch {
    error
}

// trasformar clave valor en un objeto
let entries = [['name', 'oscar'], ['age','32']];
console.log(Object.fromEntries(entries));

// el objeto de tipo simbolo nos permite accder a una descripcion
let mySymbl = 'my Symbl';
let symbl = Symbol(mySymbl);
console.log(symbl.description);
