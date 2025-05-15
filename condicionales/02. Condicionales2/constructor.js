// // Reto: Programación Orientada a Objetos
// 1. Refuerza tus conocimientos de POO creando un sistema de Vehículos.
//       1. Crea una clase Vehículo que incluya un constructor que establezca el 
// número de ruedas y un método para mostrar detalles generales del vehículo. 
//       2. Crea dos subclases de Vehículos cualesquiera que hereden de Vehículo e incluyan un constructor con atributos específicos, como la capacidad de pasajeros, y un método para mostrar detalles personalizados.
//       3. Crea una instancia de cada Vehículo y muestra sus detalles en la consola. 🚗🚲
// 2. Intenta escribir el código de JavaScript que ves en la terminal. No tiene que ser perfecto! 🧑‍💻 

class Vehiculo {
    constructor(ruedas) {
        this.ruedas = ruedas;
    }

    mostrarDetalles() {
        console.log(`Este vehículo tiene ${this.ruedas} ruedas.`);
    }
}
class Coche extends Vehiculo {
    constructor(ruedas, capacidadPasajeros) {
        super(ruedas);
        this.capacidadPasajeros = capacidadPasajeros;
    }

    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Este coche tiene una capacidad de ${this.capacidadPasajeros} pasajeros.`);
    }
}
class Bicicleta extends Vehiculo {
    constructor(ruedas, tipo) {
        super(ruedas);
        this.tipo = tipo;
    }

    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Esta bicicleta es de tipo ${this.tipo}.`);
    }
}
// Crear instancias de cada vehículo
const coche = new Coche(4, 5);
const bicicleta = new Bicicleta(2, 'montaña');
// Mostrar detalles en la consola
coche.mostrarDetalles();
bicicleta.mostrarDetalles();
