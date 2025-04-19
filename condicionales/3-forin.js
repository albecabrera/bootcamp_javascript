// For in es mejor para recorrer objetos
let traductor = {
    bucle: "loop",
    variable: "variable",
    objeto: "object",
    funcion: "function",
};

for (let etiqueta in traductor) {
    console.log(`La traduccion de ${etiqueta} es ${traductor[etiqueta]}`);
}