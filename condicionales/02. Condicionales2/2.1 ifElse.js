// Condicional if-else
let user = "Pedro";

if (user === "Leandro") {
    console.log("It is authorized");
} else {
    console.log("It is not authorized");
};

let age = 60
;

if (age >= 18) {
    console.log("Eres mayor de edad");
} else (console.log("Tienes que crecer más"));


// Ahora un ejemplo con else if
let matriculaAuto = "BN";

if (matriculaAuto === "BN") {
    console.log("Puedes entrar al parqueo");
}
else if (matriculaAuto === "BNP") {
    console.log("Tienes un permiso especial para entrar");
} else {
    console.log("Tienes que pedir permiso");
}