// POO Programación Orientada a Objetos
// En JavaScript, el objeto this se refiere al contexto de ejecución actual.
// El valor de this depende de cómo se invoque la función.
// En una función normal, this se refiere al objeto global (window en el navegador).

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    mostrarInfo: function() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.anio);
    }
};
// En este caso, this se refiere al objeto auto.
auto.mostrarInfo(); // Marca: Toyota, Modelo: Corolla, Año: 2020

let auto2 = {
    marca: "Honda",
    modelo: "Civic",
    año: 2021,
    mostrarInfo: function() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.anio);
    }
};
// En este caso, this se refiere al objeto auto2.
auto2.mostrarInfo(); // Marca: Honda, Modelo: Civic, Año: 2021

let auto3 = {
    marca: "Ford",
    modelo: "Focus",
    año: 2022,
    mostrarInfo: function() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.anio);
    }
};
// En este caso, this se refiere al objeto auto3.
auto3.mostrarInfo(); // Marca: Ford, Modelo: Focus, Año: 2022
// En este caso, this se refiere al objeto global (window en el navegador).
// En un objeto, this se refiere al objeto que lo contiene.