//Autor: Jeffo
//Tema: Carrera de Caballos

//Creación de instancias
var j1 = new Caballo("Spirit", 3, "animacion1");
var j2 = new Caballo("Rocinante", 5, "animacion2");
var j3 = new Caballo("Silver", 2, "animacion3");

//variables necesarias para las instancias
var acumulador1 = 0;
var acumulador2 = 0;
var acumulador3 = 0;

//obtención del audio
var audio = document.getElementById("miAudio")

//Función de los botones
document.getElementById("jugador1")
    .addEventListener("click", function () {
        j1.avanzar();
        casillas = j1.obtenetTotalRecorrido();
        movimiento = acumulador1 * casillas
        j1.myMove(movimiento);
        ++acumulador2;
        if (movimiento > 1250) {
            alert("Jugador 1 en su caballo " + j1.nombre + " es el orgulloso ganador"
                + " con " + j1.obtenetTotalRecorrido() + " narices ")
            audio.pause();
        }
    });

document.getElementById("jugador2")
    .addEventListener("click", function () {
        j2.avanzar();
        casillas = j2.obtenetTotalRecorrido();
        movimiento = acumulador1 * casillas
        j2.myMove(movimiento);
        ++acumulador3;
        if (movimiento > 1250) {
            alert("Jugador 2 en su caballo " + j2.nombre + " es el orgulloso ganador"
                + " con " + j2.obtenetTotalRecorrido() + " narices ")
            audio.pause();
        }
    });

document.getElementById("jugador3")
    .addEventListener("click", function () {
        j3.avanzar();
        casillas = j3.obtenetTotalRecorrido();
        movimiento = acumulador1 * casillas
        j3.myMove(movimiento);
        ++acumulador1;
        if (movimiento > 1250) {
            alert("Jugador 3 en su caballo " + j3.nombre + " es el orgulloso ganador"
                + " con " + j3.obtenetTotalRecorrido() + " narices ")
            audio.pause();
        }
    });

//Función de audio
function reproducirAudio() {
    audio.play();
}

//Plantilla de objetos
function Caballo(nombre, edad, id) {

    this.nombre = nombre;
    this.edad = edad;
    this.totalRecorrido = [];
    this.id = id;

    this.avanzar = avanzar;
    this.myMove = myMove;
    this.obtenetTotalRecorrido = obtenetTotalRecorrido;
}

//Metodos de los objetos
function avanzar() {
    var distancia = (Math.floor(Math.random() * 6) + 1) * 10;
    this.totalRecorrido.push(distancia);
    return distancia;

}

function myMove(inicio) {
    var elem = document.getElementById(this.id);
    var pos = inicio;
    var id = setInterval(frame, 20, inicio + 50);
    function frame(fin) {
        if (pos === fin) {
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
