// Importamos librerias necesarias
import { aplicarSumaEnColumnas } from "./Modules/SumaEnColumnas/sumaEnColumnaView.js";
import { aplicarOperacionesCombinadas } from "./Modules/OperacionesCombinadas/OperacionesCombinadasView.js";
import { aplicarOperacionesSegundoGrado } from "./Modules/OperacionesSegundoGrado/OperacionesSegundoGradoView.js";



var el = document.querySelectorAll(".asscii")

function asignarSumaEnColumnas() {
  // Asignamos el ejercicio a los elementos
  var element = document.querySelectorAll(".sumaEnColumna1");
  aplicarSumaEnColumnas(element, 3, 3); // El primer argumento es el elemento al que se le aplicará el ejercicio, el segundo argumento dice el numero de sumandos que se quieren generar, y el tercer argumento indica el orden de magnitud de los numeros generados

  var element = document.querySelectorAll(".sumaEnColumna2");
  aplicarSumaEnColumnas(element, 10, 9); // El primer argumento es el elemento al que se le aplicará el ejercicio, el segundo argumento dice el numero de sumandos que se quieren generar, y el tercer argumento indica el orden de magnitud de los numeros generados
}
asignarSumaEnColumnas();

function asignarOperacionesCombinadas() {
  var element = document.querySelectorAll(".operacionesCombinadas");
  aplicarOperacionesCombinadas(element);
}
asignarOperacionesCombinadas();

function asignarOperacionesSegundoGrado() {
  var element = document.querySelectorAll(".operacionesSegundoGrado");
  aplicarOperacionesSegundoGrado(element);
}
asignarOperacionesSegundoGrado();



export { aplicarSumaEnColumnas, aplicarOperacionesCombinadas };
