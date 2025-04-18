const nombre = require('nombre');
import nombre from 'nombre';
// Switch 
// El switch es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión.
// Es útil cuando tenemos múltiples condiciones que dependen del mismo valor.
// El switch es más legible que múltiples if-else if.
// Sintaxis:
// switch (expresión) {
//     case valor1:
//         // Código a ejecutar si la expresión es igual a valor1
//         break;
//     case valor2:
//         // Código a ejecutar si la expresión es igual a valor2
//         break;
//     // ...
//     default:
//         // Código a ejecutar si la expresión no coincide con ningún valor
//         break;
// }
// Ejemplo de uso del switch
let dia = 4; // Suponiendo que 1 es lunes, 2 es martes, etc.
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}
// Ejemplo con autorización 
let autorizo = 'Teresa'; // Cambia este valor para probar diferentes casos

switch (autorizo) {
    case 'Antonio': 
        console.log('Autorizado');
        break;
    case 'Teresa':
        console.log('Con privilegios de autorización');
        break;
    default:
        console.log('No autorizado');  
}