//devolver la clave y los valores de una matrix
const data = {
    frontEnd: 'oscar',
    backEnd: 'isabel',
    design: 'ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//devuleve los valores de un objeto a un arreglo
const data = {
    frontEnd: 'oscar',
    backEnd: 'isabel',
    design: 'ana',
}
const values = Object.values(data);
console.log(values);
console.log(values.length);

//pading
const string = 'hello';
console.log(string.padStart(8,'hi '));
console.log(string.padEnd(8,' hi'));

//async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('hello world'), 3000)
    : PromiseRejectionEvent(new Error('Test Error'))
 })
}
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();