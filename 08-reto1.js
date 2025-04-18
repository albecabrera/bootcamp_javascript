let nombre = "Juan";

// Mostrar el nombre
console.log(`Hola soy ${nombre}`);


// Mi nombre en mayúsculas es
console.log(`Mi nombre en mayúsculas es ${nombre.toUpperCase()}`);

// Mi nombre en minúsculas es
console.log(`Mi nombre en minúsculas es ${nombre.toLowerCase()}`);

// El mensaje de '!Hola Mundo!' tiene 12 caracteres
let mensaje = '!Hola Mundo!';
console.log(`El mensaje de ${mensaje} tiene ${mensaje.length} caracteres`);

// El tercer número del array con los valores [1, 2, 3, 4, 5] es 3
let numeros = [1, 2, 3, 4, 5];
console.log(`El tercer número del array con los valores ${numeros} es ${numeros[2]}`);

//Se añade el número que sigue en orden al final del arreglo y es: 6
numeros.push(6);
console.log(`Se añade el número que sigue en orden al final del arreglo y es: ${numeros[numeros.length - 1]}`);

// Se encontró el patrón 'lluvia' en el texto 'La lluvia en Sevilla es una maravilla'
let texto = 'La lluvia en Sevilla es una maravilla';
let patron = 'lluvia';
console.log(`Se encontró el patrón '${patron}' en el texto '${texto}'`);