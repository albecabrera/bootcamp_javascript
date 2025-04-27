// Función flecha para validar si el formulario tiene los valores requeridos
const validarFormulario = (formulario) => {
    const { nombre, email, mensaje } = formulario;
    return nombre && email && mensaje;
};

// Función para enviar el formulario
const enviarFormulario = (formulario) => {
    if (validarFormulario(formulario)) {
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("Por favor completa todos los campos.");
    }
};

// Ejemplo de uso
const formulario = {
    nombre: "Juan",
    email: "juan@example.com",
    mensaje: "Hola, este es un mensaje."
};

enviarFormulario(formulario);
