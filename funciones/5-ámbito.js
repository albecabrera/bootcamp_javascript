// Scope, ámbito, alcance 
var numero = 10; // Variable global
function sumar() {
    var numero = 20; // Variable local
    
}
sumar();

console.log(numero); // 10
// console.log(numero); // 20
console.log(sumar()); // 25