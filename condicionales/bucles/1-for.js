// Bucle for
let i = 0
for (i = 0; i < 10; i++) {
    console.log(i);
}

// Bucle for con un array
let array = ["Hola", "Mundo", "Desde", "JavaScript"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Bucle for con un array y un if
let array2 = ["Hola", "Mundo", "Desde", "JavaScript"]
for (let i = 0; i < array2.length; i++) {
    if (array2[i] === "Hola") {
        console.log("Hola");
    } else {
        console.log(array2[i]);
    }
}
// Bucle for con un array y un if
let array3 = ["Hola", "Mundo", "Desde", "JavaScript"]
for (let i = 0; i < array3.length; i++) {
    if (array3[i] === "Hola") {
        console.log("Hola");
    } else if (array3[i] === "Mundo") {
        console.log("Mundo");
    } else if (array3[i] === "Desde") {
        console.log("Desde");
    } else {
        console.log(array3[i]);
    }
}

// Correr números del 1-1000
for (i = 0; i < 10000; i++) {
    console.log(i);
}
