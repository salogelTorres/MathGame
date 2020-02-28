// Importamos librerias necesarias
import { aplicarSumaEnColumnas } from "./Modules/SumaEnColumnas/sumaEnColumnaView.js";
import { aplicarOperacionesCombinadas } from "./Modules/OperacionesCombinadas/OperacionesCombinadasView.js";

function asignarSumaEnColumnas() {
  // Asignamos el ejercicio a los elementos
  var element = document.querySelectorAll(".sumaEnColumna1");
  aplicarSumaEnColumnas(element, 3, 3); // El primer argumento es el elemento al que se le aplicará el ejercicio, el segundo argumento dice el numero de sumandos que se quieren generar, y el tercer argumento indica el orden de magnitud de los numeros generados

  var element = document.querySelectorAll(".sumaEnColumna2");
  aplicarSumaEnColumnas(element, 2, 9); // El primer argumento es el elemento al que se le aplicará el ejercicio, el segundo argumento dice el numero de sumandos que se quieren generar, y el tercer argumento indica el orden de magnitud de los numeros generados
}
asignarSumaEnColumnas();

function asignarOperacionesCombinadas() {
  var element = document.querySelectorAll(".operacionesCombinadas");
  aplicarOperacionesCombinadas(element);
}
asignarOperacionesCombinadas();

export { aplicarSumaEnColumnas, aplicarOperacionesCombinadas };
