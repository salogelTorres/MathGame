import { OperacionesCombinadasClass } from "./OperacionesCombinadasClass.js";
import { OperacionesCombinadasHelpers } from "./OperacionesCombinadasHelpers.js";

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
  
  element.innerHTML = print;
}


export { aplicarOperacionesCombinadas };
