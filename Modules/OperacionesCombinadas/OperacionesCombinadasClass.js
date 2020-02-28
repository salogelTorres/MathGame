
class OperacionesCombinadasClass {
  constructor(combinedOperation) {
    this.combinedOperation = this.setCombinedOperation(combinedOperation);
    this.valid = this.validateCombineOperation(this.combinedOperation);
    return this;
  }

  setCombinedOperation(combinedOperation) {
    if (typeof combinedOperation == "string") {
      return combinedOperation.split(" ");
    } else if (typeof combinedOperation == "object") {
      return combinedOperation;
    }
  }

  validateCombineOperation(combinedOperation) {
    var ret = false;
    combinedOperation.forEach(element => {
      // console.log(element +" es un " + Number.isInteger(parseInt(element)))
      if (!Number.isInteger(parseInt(element))) {
        switch (element) {
          case "(":
            ret = true;
            break;
          case ")":
            ret = true;
            break;
          case "[":
            ret = true;
            break;
          case "]":
            ret = true;
            break;
          case "+":
            ret = true;
            break;
          case "-":
            ret = true;
            break;
          case "x":
            console.log(element + " true" )

            break;
            console.log(element + " true" )

          case ":":
            console.log(element + " true" )

            break;
          default:
            console.log(element + " es falso");
            return false;
        }
      }else {
        ret = true;
      }
    });
    return ret;
  }

  doCombinedOperation(combinedOperation) {}
  doOperation(number1, operation, number2) {
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
}

export { OperacionesCombinadasClass };
