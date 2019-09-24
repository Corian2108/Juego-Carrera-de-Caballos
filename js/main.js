//Autor: Jeffo
//Tema: Carrera de caballos

//Animación inicio
var idInicio = document.getElementById("inicio");
var idCarrera = document.getElementById("carrera");
var idSeleccion = document.getElementById("seleccionaModo");
idInicio.style.display = "block";
idCarrera.style.display = "none";
idSeleccion.style.display = "none";

animarInicio();

//Creación de instancias
var j1 = new Caballo("Spirit", 3, "animacion1", 0);
var j2 = new Caballo("Rocinante", 5, "animacion2", 0);
var j3 = new Caballo("Silver", 2, "animacion3", 0);

//obtención del audio
var audio = document.getElementById("miAudio")

//Función de los botones
document.getElementById("jugador1")
    .addEventListener("click", function () {
        audio.play();
        j1.avanzar();
        casillas = j1.obtenetTotalRecorrido();
        if (j1.acumulador >= 1) {
            j1.acumulador = 1
        }
        movimiento = j1.acumulador * casillas
        j1.dibujarAvance(movimiento);
        if (movimiento > 1250) {
            alert("Jugador 1 en su caballo " + j1.nombre + " es el orgulloso ganador"
                + " con " + j1.obtenetTotalRecorrido() + " narices ")

        }
    });

document.getElementById("jugador2")
    .addEventListener("click", function () {
        j2.avanzar();
        casillas = j2.obtenetTotalRecorrido();
        movimiento = acumulador1 * casillas
        j2.dibujarAvance(movimiento);
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
        j3.dibujarAvance(movimiento);
        ++acumulador1;
        if (movimiento > 1250) {
            alert("Jugador 3 en su caballo " + j3.nombre + " es el orgulloso ganador"
                + " con " + j3.obtenetTotalRecorrido() + " narices ")
            audio.pause();
        }
    });