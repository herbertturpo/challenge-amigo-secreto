// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creando lista de amigos
const listaAmigos = [];

//Funcion para agregar amigo
function agregarAmigo() {

    //Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.replace(/\s+/g, ' ').trim();
    
    //Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return
    }

    //Validar si el input contiene solo letras
    const soloLetras = /^[a-zA-Z\s]+$/.test(nombreAmigo); // Expresión regular para validar solo letras y espacios
    if (!soloLetras) {
        alert('Solo se permiten letras en el nombre.');
        inputAmigo.value = ''; // Limpiar el input
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este amigo ya fue ingresado');
        return;
    } else {
        //Actualizar el array de amigos
        listaAmigos.push(nombreAmigo);
    }

    //Limpiar el campo de entrada
    inputAmigo.value = '';
    
}