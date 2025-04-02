// Ventana Fija: En una ventana fija, el tamaño de la ventana (el subconjunto de datos que estamos analizando) es constante durante toda la ejecución del algoritmo. Este tipo de técnica se utiliza cuando el problema requiere analizar un subconjunto de tamaño fijo dentro de una estructura más grande, como un arreglo o una cadena.

function maxSumaConsecutiva(arr, k) {
    let maxSuma = 0;
    let sumaActual = 0;

    // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
    for (let i = 0; i < k; i++) {
        sumaActual += arr[i];
    }

    maxSuma = sumaActual;

    // Paso 2: Desliza la ventana a lo largo del arreglo
    for (let i = k; i < arr.length; i++) {
        sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
        maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
    }

    return maxSuma;
}

console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3)); // Resultado: 9


//Ventana Variable: En una ventana variable, el tamaño de la ventana puede cambiar dinámicamente durante la ejecución del algoritmo, dependiendo de una condición específica. Esto es útil cuando se busca encontrar un subconjunto continuo que cumpla ciertas restricciones, como una suma objetivo, una cantidad de elementos únicos, o una secuencia válida.
function ventanaVariable(arr, target) {
    let sumaActual = 0, inicio = 0, longitudMinima = Infinity;

    // Expande el puntero derecho para recorrer el arreglo
    for (let fin = 0; fin < arr.length; fin++) {
        sumaActual += arr[fin];
        // Contrae la ventana desde el inicio cuando la suma cumple la condición
        while (sumaActual >= target) {
            longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
            sumaActual -= arr[inicio];
            inicio++; // Mueve el inicio hacia adelante
        }
    }

    return longitudMinima === Infinity ? 0 : longitudMinima;
}

console.log(ventanaVariable([2, 3, 1, 2, 4, 3], 7)); // Resultado: 2