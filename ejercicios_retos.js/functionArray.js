
// Las funciones flechas 
// Las funciones flechas 
let llamar = function(success, error) {
    success();
};

// Llamar a la función
llamar(
    () => console.log('Exito'),
    () => console.log('Error')
);
