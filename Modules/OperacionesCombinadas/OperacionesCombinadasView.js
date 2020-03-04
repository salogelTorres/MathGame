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
  var result = false;
  while (!result) {
    var text = new OperacionesCombinadasHelpers(5, 2, 3);
    result = new OperacionesCombinadasClass(text.slice());
    console.log(result);
  }

  print = `
  <div class="OperacionesCombinadas">
  <div class="enunciado">
    Resuelve la siguiente operación combinada: `;

  text.forEach(element => {
    print += `${element}`;
  });
  print += `</div>`;

  var indexSteps = 0;
  print += `<div class="resultado">`;
  result.forEach(steps => {
    indexSteps++;
    print += `<p>Paso ${indexSteps}) ${steps.join(" ")}</p>`;
  });
  print += `</div>`;

  element.innerHTML = print;
}

export { aplicarOperacionesCombinadas };
