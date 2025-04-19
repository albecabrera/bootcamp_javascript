// Diferencia entre var y let
var numero = 10; // Variable global
function sumar() {
    var numero = 20; // Variable local
    return numero + 5;
}
// console.log(numero); // 10
// console.log(sumar()); // 25
// TODO: Seguir estudiando el ámbito de las variables
