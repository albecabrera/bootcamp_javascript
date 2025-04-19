// La herencia

// La herencia es un mecanismo que permite a una clase heredar propiedades y métodos de otra clase.
// En JavaScript, la herencia se implementa utilizando la palabra clave extends.

// Ahora pon un ejemplo de herencia en JavaScript con padre e hijo
class Padre {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    info() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}
class Hijo extends Padre {
    constructor(nombre, edad, escuela) {
        super(nombre, edad); // Llama al constructor de la clase padre
        this.escuela = escuela;
    }
    info() {
        return `${super.info()}, Escuela: ${this.escuela}`;
    }
}
const padre = new Padre("Juan", 40);
const hijo = new Hijo("Pedro", 10, "Escuela Primaria");
console.log(padre.info()); // Nombre: Juan, Edad: 40
console.log(hijo.info()); // Nombre: Pedro, Edad: 10, Escuela: Escuela Primaria
// En este ejemplo, la clase Hijo hereda las propiedades y métodos de la clase Padre.
// La clase Hijo también puede tener sus propias propiedades y métodos.