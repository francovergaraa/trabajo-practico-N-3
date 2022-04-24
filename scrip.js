document.body.onload = addElement;

function addElement() {
    var parrafo = document.createElement("p");
    var franco = document.createTextNode("hola buenas");

    parrafo.appendChild(franco);

    var franco1 = document.getElementById(p1);
    document.body.insertBefore(parrafo, franco);
}