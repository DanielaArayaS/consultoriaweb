document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !mensaje) {
        alert("Todos los campos deben estar completos.");
        return;
    }

    console.log(`Nombre: ${nombre}, Servicio: ${servicio}, Mensaje: ${mensaje}`);
});