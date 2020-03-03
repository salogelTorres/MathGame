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
<<<<<<< HEAD
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
=======
  element.innerHTML = `Aqui va un operacion combinada`;
  var text = new OperacionesCombinadasHelpers(3, 3, 3);
  console.log(text);
>>>>>>> V2.0
}


export { aplicarOperacionesCombinadas };
