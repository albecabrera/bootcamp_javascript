// Reto: Módulos
// 1. Refuerza tus conocimientos de Módulos creando una función que permita 
// verificar si un correo electrónico es valido o invalido. Después utiliza 
// esta función en un archivo diferente.

function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Ejemplo de uso
const email1 = "ricardo@yahoo.de";
const email2 = "ricardo@.com";
const email3 = "maria@yahoo.com";

console.log(`El correo ${email1} es ${validarEmail(email1) ? "válido" : "inválido"}.`);
console.log(`El correo ${email2} es ${validarEmail(email2) ? "válido" : "inválido"}.`);
console.log(`El correo ${email3} es ${validarEmail(email3) ? "válido" : "inválido"}.`);
// // 2. Intenta escribir el código de JavaScript que ves en la terminal. No tiene que ser perfecto! 🧑‍💻