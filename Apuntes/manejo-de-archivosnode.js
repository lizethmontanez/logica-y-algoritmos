
// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = './example.txt';

if (fs.existsSync(filePath)) {
    console.log('El archivo existe.');
} else {
    console.log('El archivo no existe.');
}
//Explicación: El código anterior utiliza fs.existsSync para comprobar si un archivo llamado example.txt está presente en el sistema.


//Ejemplo: Lectura Asíncrona
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Contenido del archivo:', data);
});
//Explicación: En este ejemplo, usamos fs.readFile para leer el archivo de forma asíncrona. Esto significa que la aplicación puede continuar procesando otras tareas mientras espera la respuesta.


  //Ejemplo: Escritura de Archivos
fs.writeFile('./example.txt', 'Hola, Node.js!', (err) => {
    if (err) { // manejo de errores
        console.error('Error al escribir en el archivo:', err);
        return;
    }

    console.log('Archivo escrito con éxito.');
});
//Explicación: Este código crea un archivo (o sobreescribe uno existente) y escribe la frase "Hola, Node.js!" en él.


//Ejemplo: Eliminación de Archivos
fs.unlink('./example.txt', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
        return;
    }

    console.log('Archivo eliminado con éxito.');
});
//Explicación: fs.unlink elimina un archivo del sistema. Es importante manejar errores en caso de que el archivo no exista.