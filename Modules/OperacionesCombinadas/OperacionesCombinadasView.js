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
    var text = new OperacionesCombinadasHelpers(3, 3, 3);
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
  var button = `<button class="btn showResult btnSuma">Resolver</button>`;
  //   Creamos el boton para mostrar el resultado
  print += button;

  //   Lanzamos el evento al boton
  element.addEventListener("click", function(e) {
    if (e.srcElement.classList[1] == "showResult") {
      e.target.nextElementSibling.classList.remove("hide");
      e.target.classList.add("hide");
    }
  });

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
