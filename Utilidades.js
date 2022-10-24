function crearNodo(tag,texto) {
    var nodo = document.createElement(tag); 
    var texto = document.createTextNode(texto);
    nodo.appendChild(texto);
    nodo.style.color = "red";
    return nodo;
}

function agregarComponente(componente,nodo) {
    componente.appendChild(nodo);
}

function agregarComponenteBody(nodo) {
    document.body.appendChild(nodo);
}

function crearImagen(path, textoAlt) {
    var nodo = document.createElement("img");
    nodo.src = path;
    return nodo; 
}