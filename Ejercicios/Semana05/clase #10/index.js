console.log('Hello, World!');

if (true) {
    var edad = 25;
}

if (true) {
    let puntos = 100;
    console.log(puntos); // 100
}

const PI = 3.1416;
// PI = 3.14; // Error: Assignment to constant variable.

const user = { id:1};
user.id = 2;

const v8 = require('v8');

const miVariable = {
    nombre: "Jose",
    version:2026,
    apellido: "Ortiz"
};

const tamano = v8.serialize(miVariable).length;
console.log(`El tamaño de miVariable es: ${tamano} bytes`); //interpolacion de cadenas

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

async function iniciar() {
    const nombre = await rl.question("Digite su nombre: ");
    if(validarDatos(nombre)) {
        console.log(`Hola, ${nombre}! Bienvenido a Node.js!`);
    } else {
        console.log("El nombre ingresado no es válido. Por favor, ingrese solo letras y espacios.");
    }
    rl.close();
}

function validarDatos(nombre) {
    const expresion = /^[a-zA-Z\s]+$/; 
    const nombreValido = expresion.test(nombre);
    if (nombreValido) {
        return true;
    } else {
        return false;
    }
}

iniciar();
