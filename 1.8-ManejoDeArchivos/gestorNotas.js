const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    let notas = [];
    if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
    }

    const notaExistente = notas.find(nota => nota.titulo === titulo);
    if (notaExistente) {
        console.log(`Ya existe una nota con el título "${titulo}".`);
        return;
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    console.log('Notas guardadas:');
    notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
    } else {
    console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter(nota => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
        console.log(`No se encontró una nota con el título "${titulo}".`);
    } else {
        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
        console.log(`Nota con título "${titulo}" eliminada.`);
    }
} else {
    console.log('No hay notas para eliminar.');
    }
}

function limpiarNotas() {
    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([], null, 2));
        console.log('El archivo de notas ha sido limpiado.');
    } else {
        console.log('No se encontró el archivo de notas.');
    }
}

// Ejecución de ejemplo
limpiarNotas();
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Pendientes del día', 'Ir al veterinario');
listarNotas();
//eliminarNota('Compras');