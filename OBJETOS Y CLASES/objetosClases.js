// Objetos y clases
// Definición de un objeto
const info = () => {
// Definición de una función dentro del objeto
    return `Modelo: ${modelo.modelo}, Año: ${modelo.año}, Marca: ${modelo.marca}, Color: ${modelo.color}`;
};

let modelo = {
    modelo: "Ford",
    año: 2020,
    marca: "Focus",
    color: "Rojo",
    info: info,
};
console.log(modelo.color);
console.log(modelo.modelo);
console.log(modelo.año);