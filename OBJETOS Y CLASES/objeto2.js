// Ejercicio para crear un objeto con propiedades y métodos

// Definición de un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    ciudad: "Madrid",
    info: function () {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Profesión: ${this.profesion}, Ciudad: ${this.ciudad}`;
    },
};
// Acceso a las propiedades del objeto  

console.log(persona.nombre);
console.log(persona.profesion);

// Segundo objeto
let profesion = {
    gradoAcademico: "Programador",
    especialidad: "Web Developer",
    skills: ["JS", "Python", "SQL"],
    planes: "Teach OS"
};
console.log(profesion.skills);
console.log(profesion.planes);
console.log(profesion.gradoAcademico);
console.log(profesion.especialidad);


