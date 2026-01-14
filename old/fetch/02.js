// Fetch API desde un JSON

const cargarJSONBtn = document.querySelector("#cargarJSON");

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleado.json')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML({id, nombre, empresa, trabajo}){
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
    <p>ID: ${id}</p>
    <p>Empleado: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Puesto: ${trabajo}</p>
    `
}
