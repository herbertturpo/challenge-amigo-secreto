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

    // Validar si el amigo ya fue ingresado
    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este amigo ya fue ingresado');
        inputAmigo.value = ''; // Limpiar el input
        return;
    }

    //Actualizar el array de amigos
    listaAmigos.push(nombreAmigo);
    //Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();

    //Limpiar el campo de entrada
    inputAmigo.value = '';
    
}



//función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    // Limpiar la lista antes de actualizar 
    listaAmigosElement.innerHTML = '';

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = `${i + 1}. ${listaAmigos[i]}`;
        // Agregar el nuevo elemento a la lista
        listaAmigosElement.appendChild(li);
    }
 
}