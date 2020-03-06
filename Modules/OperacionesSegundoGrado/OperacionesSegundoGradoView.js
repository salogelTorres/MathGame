import { OperacionesSegundoGradoClass } from "./OperacionesSegundoGradoClass.js";

function aplicarOperacionesSegundoGrado(element) {
  if (element.length === undefined) {
    generateOperacionesSegundoGrado(element);
  } else {
    element.forEach(el => {
      generateOperacionesSegundoGrado(el);
    });
  }
}
function generateOperacionesSegundoGrado(element) {
  var a = Math.round(Math.random() * 200) - 100;
  var b = Math.round(Math.random() * 200) - 100;
  var c = Math.round(Math.random() * 200) - 100;
  var result = new OperacionesSegundoGradoClass(a, b, c);
  var print = `<div class="operacionesSegundoGrado">`;
  print += `<div class="enunciado">`;
  print += `Resuelve la siguiente ecuación `;
  print += "`" + a + "x^2+" + b + "x+" + c + "=0`";
  print += `</div>`;
  print += `<div class="result">`;
  print +=
    "<p>Calculamos el discriminante cuya fórmula es: `" +
    result.discriminantFormula +
    "`</p>";
  print +=
    "<p>Sustituimos los parámetros por: `" +
    result.params +
    "`  y calculamos  `" +
    result.discriminant +
    "`</p>";
  if (result.typeOfSolution == -1) {
    print += "<p>No existen soluciones reales</p>";
  } else {
    if (result.typeOfSolution == 2) {
      print += `<p>Por tanto tenemos ${result.typeOfSolution} soluciones reales</p>`;
    } else {
      print += `<p>Por tanto tenemos ${result.typeOfSolution} solución doble</p>`;
    }

    print += "<p>Fórmula que necesitamos: `" + result.generalFormula + "`</p>";
    var index = 0;
    result.steps.forEach(step => {
      index++;
      print += "<p>Paso " + index + ") `" + step + "`</p>";
    });
    print += `<p>Comprobamos que las soluciones sean correctas</p>`;

    index = 0;
    result.stepsComprobation.forEach(step => {
      index++;
      print += "<p>Paso " + index + ") `" + step + "`</p>";
    });
  }

  // print += "`" + result.ecuation + "` <br>";
  print += `</div>`;
  print += `</div>`;
  element.innerHTML = print;
}
export { aplicarOperacionesSegundoGrado };
