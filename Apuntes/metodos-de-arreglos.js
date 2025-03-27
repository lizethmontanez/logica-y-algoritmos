//FIND: El método find() devuelve el primer elemento en un arreglo que cumple con una condición dada. Si ningún elemento cumple la condición, retorna undefined.

const numeros = [10, 20, 30, 40];
const resultado = numeros.find(num => num > 25);
console.log(resultado); // 30}

//MAP: El método map() crea un nuevo arreglo aplicando una función a cada elemento del arreglo original, sin modificar el original.
const numerosM = [1, 2, 3, 4];
const cuadrados = numerosM.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9, 16]

//FILTER: El método filter() devuelve un nuevo arreglo que contiene todos los elementos que cumplen una condición especificada.
const numerosF = [5, 10, 15, 20];
const mayores = numerosF.filter(num => num > 10);
console.log(mayores); // [15, 20]

//FOREACH: El método forEach() ejecuta una función para cada elemento del arreglo. No devuelve un nuevo arreglo ni modifica el original.
const frutas = ["manzana", "plátano", "naranja"];
frutas.forEach(fruta => console.log(fruta));
// manzana
// plátano
// naranja

//SORT:El método sort() se utiliza para ordenar los elementos de un arreglo en su lugar y devuelve el mismo arreglo ordenado. 
const numerosS = [30, 5, 20, 10];
numerosS.sort((a, b) => a - b); // Orden ascendente
console.log(numerosS); // [5, 10, 20, 30]


//REDUCE: El método reduce() ejecuta una función de callback sobre cada elemento del arreglo, acumulando un valor único que se devuelve al final. 
const numerosR = [1, 2, 3, 4];
const suma = numerosR.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10


//SOME: El método some() verifica si al menos un elemento de un arreglo cumple con la condición definida en una función de callback. Si encuentra un elemento que cumple la condición, detiene la iteración y devuelve true. Si ninguno cumple, devuelve false. 
const numerosSome = [1, 2, 3, 4];
const hayMayores = numerosSome.some(num => num > 3);
console.log(hayMayores); // true

//EVERY: El método every() evalúa si todos los elementos de un arreglo cumplen con una condición especificada en una función de callback. Si todos cumplen, devuelve true; si al menos uno no lo hace, devuelve false.
const numerosE = [2, 4, 6, 8];
const sonPares = numerosE.every(num => num % 2 === 0);
console.log(sonPares); // true


//INCLUDES: El método includes verifica si un arreglo contiene un valor específico, devolviendo true si lo encuentra y false en caso contrario. Es una forma sencilla y directa de realizar búsquedas en arreglos. 
const frutasI = ["manzana", "plátano", "naranja"];
const tieneManzana = frutasI.includes("manzana");
console.log(tieneManzana); // true