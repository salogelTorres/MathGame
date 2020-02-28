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
}

export { aplicarOperacionesCombinadas };
