// El ámbito o scope
var numero = 4;
function ejemplo() {

var numero = 10; 
console.log(numero); // Primero se imprime 10 porque está dentro de la función
}

ejemplo(); 
console.log(numero); // Después se imprime el 4 porque está fuera del ámbito(scope )
