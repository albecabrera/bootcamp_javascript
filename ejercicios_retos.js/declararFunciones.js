// Funciones
// Se pueden invocar 

function sumar() {
    return 2 + 4;
}
console.log(sumar());
console.log(sumar()); 

// Otro ejemplo:

function sumar () {
    let suma = 0;
    for (let numero of arguments) {
        suma += numero;
    }
    return suma;
}
console.log(sumar(1,2,3,4));

// Declaración vs expresión
// Retorno

