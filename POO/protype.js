// Prototipos
function Auto (marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
// Prototipo
Auto.prototype.mostrarInfo = function(){
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Año: " + this.anio);
}
// Crear un nuevo objeto auto
let auto1 = new Auto("Toyota", "Corolla", 2020);
let auto2 = new Auto("Honda", "Civic", 2021);
let auto3 = new Auto("Ford", "Focus", 2022);
// Llamar al método mostrarInfo del objeto auto1
auto1.mostrarInfo(); // Marca: Toyota, Modelo: Corolla, Año: 2020