// es7 include trabaja sobre un arreglo o un string, nos va a permitir si hay algun elemento
let numbers = [1,3,5,6,10,8,90];

if (numbers.includes(7)) {
    console.log('si se encuentra el valor');
} else{
    console.log('no se encuentra el valor');
}

// elevar a la potencia
let base = 4;
let exp = 3;
let result = base ** exp;
console.log(result);