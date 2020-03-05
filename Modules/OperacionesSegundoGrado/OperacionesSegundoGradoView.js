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
  var result = new OperacionesSegundoGradoClass(6,7,3,2);
  var print = ``;
  print+="`" +result.output.discriminant + "`<br>";
  print+="`" +result.output.ecuation + "`";
  element.innerHTML = print;

}
export { aplicarOperacionesSegundoGrado };
