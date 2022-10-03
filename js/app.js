console.log('funcionando!')

const btnIngreso = document.querySelector('#btnIngreso')
const btnCerrarSesion = document.querySelector('#btnCerrarSesion')
const nombreUsuario = document.querySelector('#nombreUsuario')
const contenidoWeb = document.querySelector('#contenidoWeb')
const texto = document.querySelector('#texto')
const formulario = document.querySelector('#formulario')

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     
     accionCerrarSesion()
  } else {
     accionAcceder()
  }
});

const accionAcceder = () => {
    console.log('sin usuario registrado')
    formulario.classList.add('d-none')
    contenidoWeb.innerHTML = `
    <p> class="lead mt-5">Debes iniciar Sesion</P>
    `
}

const accionCerrarSesion = () => {
    console.log('usuario registrado')
    formulario.classList.remove('d-none')
}