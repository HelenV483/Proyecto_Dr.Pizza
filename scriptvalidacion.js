const expReg = {
    nombre: /^[a-zA-ZÀ-ÿ\s]+$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]+$/,
    comentario: /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\-]*$/
}

let inputs = document.querySelectorAll('#formulario input, textarea')
let formulario = document.getElementById('formulario');
let campos = {
    nombre: false,
    correo: false,
    asunto: false,
    comentario: false
}
const validandoForm = (e) => {
    if (e.target.name == 'Nombre') {
        console.log('evento ,', e);
        console.log('Target', e.target);
        console.log('Nombre', e.target.name);
        console.log('Valor', e.target.value);
        if (expReg.nombre.test(e.target.value) == false) {
            inputs[0].classList.add('inputError')
            document.getElementById('mensajeNombre').classList.remove('mensajeNoVisible')
            console.log(campos.nombre)
            
            
        }
        else {
            inputs[0].classList.remove('inputError')
            document.getElementById('mensajeNombre').classList.add('mensajeNoVisible')
            campos.nombre = true
        }
    }
    if (e.target.name == 'Correo') {
        console.log('evento ,', e);
        console.log('Target', e.target);
        console.log('Correo', e.target.name);
        console.log('Valor', e.target.value);
        if (expReg.correo.test(e.target.value) == false) {
            inputs[1].classList.add('inputError')
            document.getElementById('mensajeCorreo').classList.remove('mensajeNoVisible')
            campos.correo = false;
        }
        else {
            inputs[1].classList.remove('inputError')
            document.getElementById('mensajeCorreo').classList.add('mensajeNoVisible')
            campos.correo = true
        }
    }
    if (e.target.name == 'Asunto') {
        console.log('evento ,', e);
        console.log('Target', e.target);
        console.log('Asunto', e.target.name);
        console.log('Valor', e.target.value);
        if (expReg.asunto.test(e.target.value) == false) {
            inputs[2].classList.add('inputError')
            document.getElementById('mensajeAsunto').classList.remove('mensajeNoVisible')
            campos.asunto = false;
        }
        else {
            inputs[2].classList.remove('inputError')
            document.getElementById('mensajeAsunto').classList.add('mensajeNoVisible')
            campos.asunto = true
        }
    }
    if (e.target.name == 'Comentario') {
        console.log('evento ,', e);
        console.log('Target', e.target);
        console.log('Correo', e.target.name);
        console.log('Comentario', e.target.value);
        if (expReg.comentario.test(e.target.value) == false) {
            inputs[3].classList.add('inputError')
            document.getElementById('mensajeComentario').classList.remove('mensajeNoVisible')
            campos.comentario = false;
        }
        else {
            inputs[3].classList.remove('inputError')
            document.getElementById('mensajeComentario').classList.add('mensajeNoVisible')
            campos.comentario = true
        }
    }

}

inputs.forEach((input, textarea) => {
    input.addEventListener('keyup', validandoForm) //para cuando escribe 
    input.addEventListener('blur', validandoForm) // este evento sirve para cuando se presiona afuera se active el evento


})

// ****Validacion del Formulario ***//** */
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    /*La función preventDefault() se utiliza para evitar el envío de un formulario si se detecta que no es válido. 
    También se puede emplear para prevenir el envío del formulario al presionar la tecla "Enter".  */
       
        if (campos.nombre == true && campos.correo == true && campos.asunto == true && campos.comentario == true) {
        document.getElementById("formulario").reset(); //una vez que se envia  se resetea
        window.alert('Enviado Correctamente')
        document.getElementById('mensajeNoExito').classList.add('ocultarEXito')
        document.getElementById('mensajeExito').classList.remove('ocultarEXito')
        setTimeout(() => {
            document.getElementById('mensajeExito').classList.add('ocultarEXito');
        }, 3000)
        clearcampos(campos)
        }
    else {
        document.getElementById('mensajeNoExito').classList.remove('ocultarEXito')
        setTimeout(()=>{
        document.getElementById('mensajeNoExito').classList.add('ocultarEXito');
        }, 3000)
    }
    function clearcampos (campos) {
        campos.nombre = false;
        campos.correo = false;
        campos.asunto=false;
        campos.comentario=false
    }

})
