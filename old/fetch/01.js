// Fetch API consumir datos desde un txt
// Tomar los elementos con GetElementByID
const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);

// Convertir esta function en arrow function

function obtenerDatos() {
    fetch('data/datos.txt').then(respuesta => {
        console.log(respuesta);

        console.log(respuesta.headers.get("Content-Type")); //Headers
        console.log(respuesta.status); //estatus de la info
        console.log(respuesta.statusText) //estado en ingles
        console.log(respuesta.url); // URL a la que consultamos
        console.log(respuesta.type) //Tipo de consulta

        return respuesta.text();
    })
        .then(datos => {
            console.log(datos);
        })
        .catch(error => {
            console.log(error);
        })
}