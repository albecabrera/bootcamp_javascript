// Ejercicio de bucle for in...
let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaracion: 'declaration',
    object: 'objeto'
};

for (let etiqueta in traductor) {
    console.log(etiqueta + ' en inglés es: ' + traductor[etiqueta]);
}