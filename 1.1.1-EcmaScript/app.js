import { registrarDestino, mostrarItinerario } from "./actividad-1.js"; 

// Iniciar la aplicación
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("New York", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();