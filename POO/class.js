// Crear clases con el constructor
// En JavaScript, las clases son una forma de crear objetos y definir su comportamiento.
// Las clases son una forma de crear objetos y definir su comportamiento.
class Auto {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
   info () {
      return this.marca + " " + this.modelo + " " + this.anio;  
    }
}
const auto1 = new Auto("Toyota", "Corolla", 2020);
const auto2 = new Auto("Honda", "Civic", 2021);
const auto3 = new Auto("Ford", "Focus", 2022);
console.log(auto1.info()); // Toyota Corolla 2020
console.log(auto2.info()); // Honda Civic 2021
console.log(auto3.info()); // Ford Focus 2022

