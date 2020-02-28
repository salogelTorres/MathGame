import { OperacionesCombinadasClass } from "./OperacionesCombinadasClass.js";

function aplicarOperacionesCombinadas(element) {
  if (element.length === undefined) {
    generateOperacionesCombinadas(element);
  } else {
    element.forEach(el => {
      generateOperacionesCombinadas(el);
    });
  }
}

function generateOperacionesCombinadas(element) {
  element.innerHTML = `Aqui va un operacion combinada`;
  var operacion = "2 + 5 x 8 : 3 + [ 2 x ( 5 + 7 ) ]";

  var operacionCombinada = new OperacionesCombinadasClass(operacion);
  console.log(operacionCombinada);
}

export { aplicarOperacionesCombinadas };
