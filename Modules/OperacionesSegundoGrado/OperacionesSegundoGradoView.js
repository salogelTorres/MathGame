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
function generateOperacionesSegundoGrado(element){
  var result = new OperacionesSegundoGradoClass(5,7,3,2);
  console.log(result);
}
export { aplicarOperacionesSegundoGrado };
