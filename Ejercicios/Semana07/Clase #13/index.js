/*
function exterior(){
    const mensaje = "Hola desde afuera";    
    function interior(){
        console.log(mensaje);
    }
    interior();

}
exterior();

*/
/* Clausura: Una clausura es una función que tiene acceso a las variables de su función externa, incluso después de que la función externa haya terminado de ejecutarse. Esto permite que la función interna "recuerde" el estado de las variables de la función externa.
function crearContador(){
    let cuenta = 0;
    return function(){
        cuenta++;
        return cuenta;
    };
}
 const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());
*/
/*
comporta miento del THIS

const equipo = {
    nombre: "Backend",
    avisar: function(){
        setTimeout(function(){
            console.log({this.nombre);
        }, 100);
    }
*/

/* Call Aply Bind 
function presentar(salud){
    console.log(`${salud}, soy ${this.nombre}`);
}
const persona1 = { nombre: "Carla" };

presentar.call(persona1, "Hola"); // Hola, soy Carla
presentar.apply(persona1, ["Buenas"]); // Hola, soy Carla

const presentarCarla = presentar.bind(persona1);
presentarCarla("Que tal"); // Que Tal, soy Carla
*/
/*
const persona = {nombre: "Carla", edad: 30};
const {edad:anios = 31 } = persona;
console.log(anios);
*/
/*
function sumarTodo(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}   
console.log(sumarTodo(1, 2, 3, 4, 5,50,86,21,562,24,5155)); 
*/

/* Spread Operator 

const original = {nombre: "Equipo A", puntos: 10};
const actualizado = {...original, puntos: 15};

console.log(original); // {nombre: "Equipo A", puntos: 10}
console.log(actualizado); // {nombre: "Equipo A", puntos: 15}

const numero = [1, 2, 3];
const nuevoNumero = [...numero, 4];
*/

/* Optional Chaining: Permite acceder a propiedades de objetos anidados sin tener que verificar si cada nivel existe. 
Si alguna propiedad es null o undefined, la expresión devuelve undefined en lugar de lanzar un error. 

const respuesta = {data: {usuario: null}};
const nombre = respuesta.data.usuario?.nombre;  

const nombre = respuesta?.data.usuario?.nombre; 
console.log(nombre); // undefined 

*/

/* Nullisgh Coalescing Operator: Permite asignar un valor predeterminado 
a una variable si el valor es null o undefined.

const descuento = 0;
console.log(descuento || 10); // 10
console.log(descuento ?? 10); // 0

const nombre = "";
console.log(nombre || "Invitado"); // Invitado
console.log(nombre ?? "Invitado"); // ""

*/
/*
import { sumar, restar } from './operadores.js';

console.log(sumar(5, 3)); 
console.log(restar(5, 3)); */

/*
import {Perro} from './Perro.js';

const miPerro = new Perro("Firulais", "mamifero", "Golden Retriever", 3);

console.log(miPerro.ladrar());
console.log(miPerro.comer());
*/
/*
const estudiante = {
    nombre: "Juan",
    edad: 20,
}

let copia = estudiante;
copia.nombre = "Pedro";
console.log(estudiante.nombre);*/

/* 
const animal = {
    comer() {
        console.log(`${this.nombre} está comiendo`);
    }
};

const perro = Object.create(animal);
perro.nombre = "Firulais";
perro.comer(); // Firulais está comiendo

console.log(perro.__proto__ === animal); /* === extricta / == abstracta*/ 

/*
const base = { saludo: "hola" };
const hijo = Object.create(base);
console.log(hijo.saludo); // "hola"
hijo.saludo = "Pura vida";
console.log(hijo.saludo); // "Pura vida"
console.log(base.saludo); // "hola" */

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}   

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}.`);
}

const ana = new Persona("Ana", 25);
ana.saludar(); // Hola, soy Ana.