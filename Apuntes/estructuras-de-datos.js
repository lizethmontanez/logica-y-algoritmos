//ARRAYS: es una estructura de datos que almacena una colección de elementos.
// Son perfectos para almacenar colecciones ordenadas de datos que se pueden acceder mediante índices. Son útiles cuando el orden de los elementos es importante.
let colores = ["rojo", "verde", "azul",];
console.log(frutas[0]);  // Imprime "manzana"

colores.push("amarillo");
console.log(colores);  // Imprime ["rojo", "verde", "azul", "amarillo"]

colores.pop();
console.log(colores);  // Imprime ["rojo", "verde", "azul"]

let invitados = ["Juan", "María", "Pedro", "Ana"];
invitados.push("Luis");  // Agrega a Luis a la lista
console.log(invitados);  // Imprime ["Juan", "María", "Pedro", "Ana", "Luis"]


//OBJETOS: almacenar una colección de datos en forma de propiedades clave-valor, en este caso la clave es el nombre y el valor es Juan
// Son ideales para almacenar datos relacionados entre sí bajo una estructura de clave-valor. Son más flexibles que los arreglos, ya que puedes usar cualquier tipo de clave.
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(persona.nombre);  // Imprime "Juan"

persona.ciudad = "Barcelona"; //modifica una propiedad
persona.telefono = "123-456-7890"; //agrega una nueva propiedad


//EJEMPLO OBJETOS + ARRAYS
let productos = [
    { nombre: "Camiseta", precio: 20, stock: 50 },
    { nombre: "Pantalón", precio: 40, stock: 30 },
    { nombre: "Zapatos", precio: 60, stock: 20 }
];
console.log(productos[1].nombre);  // Imprime "Pantalón"


//PILAS: sigue el principio de último en entrar, primero en salir (LIFO)
// Ejemplo: Historial de navegación en un navegador web, manejo de deshacer en aplicaciones de edición.
let pila = [];
pila.push("Página 1");
pila.push("Página 2");
pila.push("Página 3");
console.log(pila.pop());  // Imprime "Página 3", la última página visitada


//QUEUES: sigue el principio de primero en entrar, primero en salir (FIFO)
//Ejemplo: Procesamiento de trabajos en una impresora, manejo de solicitudes en un servidor.
let cola = [];
cola.push("Trabajo 1");
cola.push("Trabajo 2");
cola.push("Trabajo 3");
console.log(cola.shift());  // Imprime "Trabajo 1", el primero en entrar


//CONJUNTOS (SETS): almacena elementos únicos, es decir, no permite duplicados.
//Ejemplo: Registro de usuarios que han participado en un evento, elementos únicos en una lista.
let usuarios = new Set();
usuarios.add("Juan");
usuarios.add("Ana");
usuarios.add("Juan");  // No se agrega, porque "Juan" ya está en el conjunto
console.log(usuarios);  // Imprime Set {"Juan", "Ana"}


//MAPS: es una estructura de datos similar a un objeto, pero permite usar cualquier tipo de clave, no solo cadenas.
//Ejemplo: Asociación de productos con precios en una tienda en línea, mapeo de códigos de colores.
let precios = new Map();
precios.set("productoA", 25);
precios.set("productoB", 40);
precios.set("productoC", 15);
console.log(precios.get("productoB"));  // Imprime 40


//TREES:  es una estructura jerárquica en la que cada elemento (nodo) tiene un valor y una lista de referencias a otros nodos, que se llaman hijos.
//Ejemplo: Estructura de carpetas en un sistema de archivos, representación de una organización jerárquica.
let arbol = {
    nombre: "Root",
    hijos: [
        { nombre: "Carpeta 1", hijos: [] },
        { nombre: "Carpeta 2", hijos: [{ nombre: "Subcarpeta", hijos: [] }] }
    ]
};

//LISTAS: almacena una colección ordenada de elementos. A diferencia de los arreglos, las listas pueden tener un comportamiento más flexible, y pueden implementarse de diferentes maneras dependiendo de si son listas estáticas o listas dinámicas.

// Este ejemplo ilustra el comportamiento básico de una lista estática
let listaDeTareas = ["Comprar pan", "Llamar a mamá", "Enviar correo"];
listaDeTareas.push("Ir al gimnasio");  // Añadir una tarea a la lista
console.log(listaDeTareas);

//LINKED LISTS: estructura de datos compuesta por nodos, donde cada nodo contiene un valor y una referencia (o enlace) al siguiente nodo en la secuencia. A diferencia de los arreglos y las listas, las listas ligadas no almacenan sus elementos de manera contigua en memoria. 

// Nodo de lista ligada básico
function Nodo(valor) {
    this.valor = valor;
    this.siguiente = null;  // Enlace al siguiente nodo
}

// Crear una lista ligada simple
    let nodo1 = new Nodo("Página 1");
    let nodo2 = new Nodo("Página 2")
    let nodo3 = new Nodo("Página 3");

// Enlazar los nodos
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    console.log(nodo1.siguiente.valor);  // Imprime "Página 2"


//CONJUNTO O BAG: es una estructura de datos que almacena elementos sin un orden específico y sin permitir duplicados. 
let carritoDeCompras = new Set();  // Usamos Set para evitar duplicados
carritoDeCompras.add("Zapatos");
carritoDeCompras.add("Camiseta");
carritoDeCompras.add("Zapatos");  // No se agregará porque "Zapatos" ya está en el conjunto
console.log(carritoDeCompras);  // Imprime Set {"Zapatos", "Camiseta"}


//TABLAS HASH:  es una estructura de datos que mapea claves a valores a través de una función hash. 
let usuario = new Map();
usuario.set("juan123", "password123");
usuario.set("ana456", "password456");
console.log(usuario.get("juan123"));  // Imprime "password123"


//PRIORITY QUEUES: es una estructura de datos que almacena elementos con una prioridad asociada, y siempre extrae el elemento con la prioridad más alta (o baja, dependiendo de la implementación).
class ColaDePrioridad {
    constructor() {
        this.items = [];
    }

    agregar(item, prioridad) {
        this.items.push({ item, prioridad });
        this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
    }

    extraer() {
      return this.items.shift();  // Extrae el primer elemento (el de mayor prioridad)
    }
}

let colaPQ = new ColaDePrioridad();
    colaPQ.agregar("Tarea urgente", 1);
    colaPQ.agregar("Tarea normal", 3);
  console.log(colaPQ.extraer());  // Imprime { item: "Tarea normal", prioridad: 3 }