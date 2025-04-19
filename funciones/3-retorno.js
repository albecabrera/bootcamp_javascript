// Return

function sumar(a,b) {
    return a + b;
}
// sumar(1,2);
console.log(sumar(1,2));

let usuario = {
    nombre: 'Ana',
    apellido: 'García',
};

function cambiarApellido(usuario) {
    let copia = JSON.parse(JSON.stringify(usuario));
    copia.apellido = 'López';
    return copia;
}
console.log(cambiarApellido(usuario));
// Cambiar el apellido del objeto usuario
function cambiarApellido(usuario) {
    // Cambiar el apellido del objeto usuario
    // Cambiar el apellido del objeto usuario
    2
    usuario.apellido = 'López';
    return usuario;
}
console.log(cambiarApellido(usuario));
console.log(usuario);