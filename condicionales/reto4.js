// RETO 4

// Imprime los números del 1 al 5
let i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 5); // Se ejecuta al menos una vez

// Lista de colores 

let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
let c = 0;
do {
    console.log(colores[c]);
    c++;
}
while (c < colores.length); // Se ejecuta al menos una vez
// Se ejecuta al menos una vez

// Objeto persona
let persona = {
    nombre: "Maria",
    edad: 27,
    profesion: "Diseñadora",
}
let p = 0;
do {
    console.log(Object.values(persona)[p]);
    p++;
}
while (p < Object.values(persona).length); // Se ejecuta al menos una vez