let listaDeCompras = [];

// Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista (se asegura que no haya duplicados)
const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
    } else {
        console.log(`El producto "${producto}" ya está en la lista.`);
    }
};

// Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
const eliminarProducto = (producto) => {
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
};

// Implementa una función mostrarLista() que imprima todos los productos de la lista.
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach(producto => console.log(`- ${producto}`));
    }
};

agregarProducto("Manzanas");
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Manzanas");

eliminarProducto("Pan"); 

mostrarLista(); 