// Asinchronía
// setTimeout
console.log('antes');
setTimeout(() => {
    console.log('Hola');
}
, 4000); // 4 segundos
console.log('despues');

console.log('primero escribe tu nombre');
setTimeout(() => {
    console.log('segundo, mira el tiempo que pasa');
}, 2000); // 2 segundos
console.log('tercero, ahora mira el tiempo que pasa');