const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {

    e.preventDefault();

    //validar
    const cuidad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if( ciudad === '' || pais === '') {
        //HUBO UN ERROR
        mostrarError('Ambos campos son obligatorios');

        return;

    }
}

function mostrarError(mensaje) {
    console.log (mensaje)
}