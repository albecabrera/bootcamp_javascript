// RETO CONDICIONALES
// Reto: Condicionales
// 1. Refuerza tus conocimientos en condicionales imprimiendo si un usuario es mayor o menor de edad, después que de acuerdo a la acción ingresada "crear, colocar, actualizar y borrar" se imprima que acción se realizará y por ultimo, si un número es par o impar. 🤓
// 2. Intenta escribir el código de JavaScript del programa que ves en la consola. No tiene que ser perfecto! 🧑‍💻
// 3. Compara tu solución con la solución incluida en los archivos descargables al inicio del curso y descubre que partes pudiste hacer de mejor manera. No te preocupes si encuentras métodos que no conocías, ya las conocerás! 🙌 Buenas habilidades! 🔥

// Ejercicio 1
let edad = 16;
if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}


// Ejercicio 2
// 2. Intenta escribir el código de JavaScript del programa que ves en la consola. No tiene que ser perfecto! 🧑‍💻

let identificacion = false; 
if (identificacion === true) {
  console.log("Puedes entrar");
} else {
  console.log("Te quedas afuera");
}

let nacionalidad = "latina"

switch (nacionalidad) {
  case "africana":
  console.log("Eres de nacionalidad africana");
  break; 
  case "europea":
  console.log("Eres de nacionalidad europea");
  break; 
  case "asiática":
  console.log("Eres de nacionalidad asiática");
  break; 
  case "latina":
  console.log("Eres de nacionalidad latina");
  break; 
  default:
    console.log("No tienes nacionalidad ninguna");
}

