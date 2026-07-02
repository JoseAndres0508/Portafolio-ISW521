/*
const numeros = [40, 30, 1, 5, 8, 100];

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));
*/

/*
let arr = ["a","b","c"];
arr[7] = "z";
arr.length;
*/

/*
const doubleImp = [];
for (let i = 0; i < 10; i++) {
    doubleImp.push(i * 2);
}

const doubleDec = numeros.map(n => n * 2);
*/


/* Imperativo
const precios = [100, 250, 80, 400];
const caros = [];
for (let i = 0; i < precios.length; i++) {
    if (precios[i] > 200) {
        caros.push(precios[i]);
    }
}
console.log(caros); */

/* Declarativo 
const precios = [100, 250, 80, 400];

const caros = precios.filter(precio => precio > 150);
console.log(caros); */
/*
const estudiantes = [
    {nombre: "Ana", carnet: "2024001"},
    {nombre: "Luis", carnet: "2024002"}
];

const carnets = estudiantes.map(
    e => `${e.carnet}: ${e.nombre.toUpperCase()}`
);

console.log(carnets);
*/

const estudiantes = [
    {nombre: "Ana", promedio: 85},
    {nombre: "Luis", promedio: 90},
    {nombre: "Pedro", promedio: 75},
    {nombre: "María", promedio: 80}
];

const aprobados = estudiantes.filter(estudiante => estudiante.promedio >= 80);
