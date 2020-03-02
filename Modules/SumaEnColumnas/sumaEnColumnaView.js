import { sumaEnColumnasClass } from "./sumaEnColumnasClass.js";

function aplicarSumaEnColumnas(element, numberOfAddends, dimension) {
  if (element.length === undefined) {
    generateSumaEnColumnas(element, numberOfAddends, dimension);
  } else {
    element.forEach(el => {
      generateSumaEnColumnas(el, numberOfAddends, dimension);
    });
  }
}

function generateSumaEnColumnas(element, numberOfAddends, dimension) {
  var elemento = element;
  var sumandos = [];
  //   Generamos los numeros
  for (var i = 0; i < numberOfAddends; i++) {
    sumandos.push(Math.round(Math.random() * 10 ** dimension));
  }

  //   Creamos el enunciado
  var print = `<div class="sumaColumna">`;
  print += `<p class='enunciado'> Realice la suma en columnas de los siguientes numeros: `;
  var index = 1;
  sumandos.forEach(sumando => {
    if (index == numberOfAddends) {
      print += ` ${sumando}`;
    } else {
      print += ` ${sumando},`;
    }
    index++;
  });
  print += `</p>`;
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

  //   Creamos el resultado
  var sumaEnColumna = new sumaEnColumnasClass(sumandos);
  print += `<div class="resultado hide">`;
  print += `<table>`;

  //   Mostramos LLEVA
  print += `<tr class="lleva">`;
  print += `<td>Lleva:</td>`;
  sumaEnColumna.lleva.forEach(digit => {
    
    if (digit==0) {
    print += `<td></td>`;      
    }else {
      print += `<td>+${digit}</td>`;
    }
    
  });
  print += `</tr>`;

  //   Mostramos los SUMANDOS
  var index = 1;
  var last = sumaEnColumna.sumandos.length;
  sumaEnColumna.sumandos.forEach(sumando => {
    if (index == last) {
      print += `<tr><td>+</td>`;
    } else {
      print += `<tr><td></td>`;
    }
    sumando.forEach(digit => {
      print += `<td>${digit}</td>`;
    });
    print += `</tr>`;
    index++;
  });

  //   MOSTRAMOS EL TOTAL
  print += `<tr class="result">`;
  print += `<td></td>`;
  sumaEnColumna.suma.forEach(digit => {
    print += `<td>${digit}</td>`;
  });
  print += `</tr>`;

  //   Fin de la tabla
  print += `</table>`;

  //   MOSTRAMOS EL TOTAL
  print += `<div><p>Resultado:`;
  sumaEnColumna.suma.forEach(digit => {
    print += `${digit}`;
  });
  
  print += `</p></div>`;
  print += `</div>
  </div>`;

  elemento.innerHTML = print;
}


export { aplicarSumaEnColumnas};
