//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100.
const menores = productos.filter(item => item.precio < 100);
console.log(menores);

//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Orden ascendente
console.log(productos); // [5, 10, 20, 30]

//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombres = productos.map(nom => nom.nombre);
console.log(nombres); // [1, 4, 9, 16]

//Usar Reduce para saber cuánto pagaría alguien que compró un libro y unos zapatos 
const total = productos
    .filter(producto => producto.nombre === "Libro" || producto.nombre === "Zapatos")
    .reduce((acumulado, producto) => acumulado + producto.precio, 0);
console.log(total);

//Muestra los resultados de la aplicación de cada método en consola.
