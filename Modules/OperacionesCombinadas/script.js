var text = "2 + 5 x 8 : 2 x ( 5 + 7 )";
var splitText = text.split(" ");
console.log(splitText);
var firstPositionParenthesis = splitText.indexOf("(");
var secondPositionParenthesis = splitText.indexOf(")");
console.log(firstPositionParenthesis + " " + secondPositionParenthesis);
var firstOperation = splitText.slice(
  firstPositionParenthesis + 1,
  secondPositionParenthesis
);
console.log(doOperation(firstOperation[0], firstOperation[1], firstOperation[2]));


function doOperation(number1, operation, number2) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
  switch (operation) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "x":
      return number1 * number2;
      break;
    case ":":
      return number1 / number2;
      break;
  }
}
