import arugments from 'arugments';
// Funciones

// Definición de una función
// Una función es un bloque de código que se puede reutilizar
let inicial = 3; 
function sumar () {
   inicial += 4;
    return inicial;
}
console.log(sumar());
console.log(sumar());
console.log(sumar());
console.log(sumar());


function sumar(a,b) {   
    return a + b;
}
console.log(sumar(2,3));
console.log(sumar(5,7));
console.log(sumar(10,20));

function sumar() {
    let suma = 0;
    for (let numero of arugments) {
        suma += numero;
    }
    return suma;
}
console.log(sumar(2,3.,4,5));
console.log(sumar(5,7));