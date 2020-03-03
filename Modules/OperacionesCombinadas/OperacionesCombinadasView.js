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
  var print = ``;
  var text =
    "2 x [ 2 x 4 x ( 34 + 8 x 4 ) x ( 5 + 4 ) ] : 4 + [ 23 x ( 4 + 6 ) ]";
  var operacionCombinada = new OperacionesCombinadasClass(text);
  console.log(operacionCombinada);
  // operacionCombinada.forEach(step => {
  //   print += `<br>`;
  //   step.forEach(char => {
  //     print += `${char} `;
  //   });
  // });
  element.innerHTML = print;
}


export { aplicarOperacionesCombinadas };
