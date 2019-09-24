//Autor: Jeffo
//Tema: Carrera de Caballos

//Plantilla de objetos
function Caballo(nombre, edad, id, acumulador) {
    //atributos
    this.nombre = nombre;
    this.edad = edad;
    this.id = id;
    this.acumulador = acumulador;
    //almacenes
    this.totalRecorrido = [];
    //metodos
    this.avanzar = avanzar;
    this.dibujarAvance = dibujarAvance;
    this.obtenetTotalRecorrido = obtenetTotalRecorrido;
}

//Metodos de los objetos
function avanzar() {
    var distancia = (Math.floor(Math.random() * 6) + 1) * 10;
    this.totalRecorrido.push(distancia);
    return distancia;
}

function dibujarAvance(inicio) {
    var elem = document.getElementById(this.id);
    var pos = inicio;
    var id = setInterval(frame, 20, inicio + this.obtenetTotalRecorrido[this.acumulador]);
    function frame(fin) {
        if (pos === fin) {
            audio.pause();
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }

}

function obtenetTotalRecorrido() {
    var total = this.totalRecorrido.reduce(sumar);
    return total;
}

function sumar(sumaTotal, recorrido) {
    return sumaTotal + recorrido;
}

//Animación inicio
function animarInicio() {
    var elemento = document.getElementById("animacionInicio");
    var posicion = -991;
    var id = setInterval(frame, 5);
    function frame() {
        if (posicion == 171) {
            clearInterval(id);
            idInicio.style.display = "none";
            idSeleccion.style.display = "block";
        } else {
            posicion++;
            elemento.style.left = posicion + "px";
        }
    }
}