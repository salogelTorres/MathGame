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
  var text = "2 x (34 + 8 ) -5 : 4";
  // var text = ["2", "x", "(", "34", "+", "8", ")", "-5", ":", "4"];
  var operacionCombinada = new OperacionesCombinadasClass(text);
  console.log(operacionCombinada);

}

export { aplicarOperacionesCombinadas };
