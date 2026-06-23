/*
// console.log('Hello, World!');

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
*/

//1-12 niños
//13-17 adolescentes
//18-64 adultos
//65+ adultos mayores
/*
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });


    if (edad <= 12) {
        return "niño";
    } else if (edad >= 13 && edad <= 17) {
        return "adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "adulto";
    } else {
        return "adulto mayor";
        }


let edad = 15;

const categoria = edad <= 12 ? "niño" : edad <= 17 ? "adolescente" : edad >= 18 && edad <= 64 ? "adulto" : "adulto mayor";  
console.log(`La categoría de edad es: ${categoria}`);

*/

/*SWITCH con mes del año*/

const mes = "Agosto";

switch (mes) {
    case "Enero":
        console.log("Inicio del año");
        break;
    case "Febrero":
        console.log("Mes del amor");
        break;
    case "Marzo":
        console.log("Mes de la primavera");
        break;
    case "Abril":
        console.log("Mes de las flores");
        break;
    case "Mayo":
        console.log("Mes de los Santos");
        break;
    case "Junio":
        console.log("Mes del sol");
        break;
    case "Julio":
        console.log("Mes de las vacaciones");
        break;
    case "Agosto":
        console.log("MI CUMPLEAÑOS");
        break;
    case "Septiembre":
        console.log("Mes de la independencia");
        break;
    case "Octubre":
        console.log("Mes de Halloween");
        break;
    case "Noviembre":
        console.log("Mes de los muertos");
        break;
    case "Diciembre":
        console.log("Mes de la Navidad");
        break;
    default:
        console.log("Mes no reconocido");
}