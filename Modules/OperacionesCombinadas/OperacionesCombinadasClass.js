class OperacionesCombinadasClass {
  constructor(combinedOperation) {
    this.combinedOperation = this.setCombinedOperation(combinedOperation);
    this.firstOperationPosition = 0;
    this.directResult = "";
    this.steps = [this.combinedOperation.slice()];
    this.output = "";
    this.exec();

    if (this.output == this.directResult) {
      return this.result();
    } else {
      throw "Error en coincidencia de resultado";
    }
  }
  result() {
    return this.steps;
  }

  exec() {
    this.directResult = OperacionesCombinadasClass.doCombinedOperation(
      this.combinedOperation
    );
    var index2 = 0;
    while (!this.isBasicOperation(this.combinedOperation) && index2 < 20) {
      index2++;
      this.firstOperationPosition = 0;
      var operation = this.combinedOperation;
      var index = 0;
      while (!this.isBasicOperation(operation) && index < 100) {
        operation = this.findFirstOperation(operation);
        index++;
      }
      var resultOperation = this.doOperation(operation);
      this.updateCombinedOperation(operation, resultOperation);
      this.generateOutput(resultOperation);
    }
    this.firstOperationPosition = 0;
    var resultOperation = this.doOperation(this.combinedOperation);
    this.updateCombinedOperation(this.combinedOperation, resultOperation);
    this.generateOutput(resultOperation);
  }

  updateCombinedOperation(operation, resultOperation) {
    // console.log(this.firstOperationPosition);
    this.combinedOperation.splice(
      this.firstOperationPosition,
      operation.length,
      resultOperation
    );
    var beforeElement = this.combinedOperation[this.firstOperationPosition - 1];
    var afterElement = this.combinedOperation[this.firstOperationPosition + 1];
    if (beforeElement == "(" && afterElement == ")") {
      this.combinedOperation.splice(this.firstOperationPosition + 1, 1);
      this.combinedOperation.splice(this.firstOperationPosition - 1, 1);
    }
    if (beforeElement == "[" && afterElement == "]") {
      this.combinedOperation.splice(this.firstOperationPosition + 1, 1);
      this.combinedOperation.splice(this.firstOperationPosition - 1, 1);
    }
    var toStep = this.combinedOperation.slice();

    toStep = this.putParenthesisNumberNegative(toStep);
    this.steps.push(toStep);
  }
  putParenthesisNumberNegative(array) {
    if (array.length > 1) {
      var ret = array.map(function(x) {
        if (Number.isInteger(x) && x < 0) {
          return "(" + x + ")";
        } else {
          return x;
        }
      });
      return ret;
    } else {
      return array;
    }
  }

  generateOutput(resultOperation) {
    this.output = resultOperation;
  }
  // Quita los paréntesis y los corchetes al principio y al final
  quitInitEnd(array) {
    if (!Array.isArray(array)) {
      return false;
    } else {
      array = array.shift();
      array = array.pop();
      return array;
    }
  }

  findFirstOperation(combinedOperation) {
    if (combinedOperation.indexOf("[") != -1) {
      var init = combinedOperation.indexOf("[") + 1;
      var end = combinedOperation.indexOf("]");
      this.firstOperationPosition += init;
      return combinedOperation.slice(init, end);
    } else if (combinedOperation.indexOf("(") != -1) {
      var init = combinedOperation.indexOf("(") + 1;
      var end = combinedOperation.indexOf(")");
      this.firstOperationPosition += init;
      return combinedOperation.slice(init, end);
    } else if (
      combinedOperation.indexOf("x") != -1 &&
      combinedOperation.indexOf(":") != -1
    ) {
      if (combinedOperation.indexOf("x") < combinedOperation.indexOf(":")) {
        var init = combinedOperation.indexOf("x") - 1;
        var end = combinedOperation.indexOf("x") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      } else {
        var init = combinedOperation.indexOf(":") - 1;
        var end = combinedOperation.indexOf(":") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      }
    } else if (
      combinedOperation.indexOf("x") != -1 ||
      combinedOperation.indexOf(":") != -1
    ) {
      if (combinedOperation.indexOf("x") > combinedOperation.indexOf(":")) {
        var init = combinedOperation.indexOf("x") - 1;
        var end = combinedOperation.indexOf("x") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      } else {
        var init = combinedOperation.indexOf(":") - 1;
        var end = combinedOperation.indexOf(":") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      }
    } else if (
      combinedOperation.indexOf("+") != -1 &&
      combinedOperation.indexOf("-") != -1
    ) {
      if (combinedOperation.indexOf("+") < combinedOperation.indexOf("-")) {
        var init = combinedOperation.indexOf("+") - 1;
        var end = combinedOperation.indexOf("+") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      } else {
        var init = combinedOperation.indexOf("-") - 1;
        var end = combinedOperation.indexOf("-") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      }
    } else {
      if (combinedOperation.indexOf("+") > combinedOperation.indexOf("-")) {
        var init = combinedOperation.indexOf("+") - 1;
        var end = combinedOperation.indexOf("+") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      } else {
        var init = combinedOperation.indexOf("-") - 1;
        var end = combinedOperation.indexOf("-") + 2;
        this.firstOperationPosition += init;
        return combinedOperation.slice(init, end);
      }
    }
  }

  isResult(combinedOperation) {
    if (combinedOperation.length != 1) {
      return false;
    } else if (isNaN(combinedOperation[0])) {
      return false;
    } else {
      return true;
    }
  }

  isBasicOperation(combinedOperation) {
    if (combinedOperation.length != 3) {
      if (
        combinedOperation.length == 5 &&
        (combinedOperation[0] == "(" || combinedOperation[0] == "[")
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        Number.isInteger(combinedOperation[0]) &&
        Number.isInteger(combinedOperation[2])
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  isOperator(string) {
    if (string == "+") {
      return true;
    } else if (string == "-") {
      return true;
    } else if (string == "x") {
      return true;
    } else if (string == ":") {
      return true;
    } else {
      return false;
    }
  }

  setCombinedOperation(combinedOperation) {
    if (typeof combinedOperation == "string") {
      var ret = combinedOperation.split(" ");
    } else if (typeof combinedOperation == "object") {
      var ret = combinedOperation;
    }

    if (this.validateCombinedOperation(ret)) {
      return ret;
    } else {
      throw "Operación combinada no válida";
    }
  }
  validateCombinedOperation(combinedOperation) {
    if (
      OperacionesCombinadasClass.doCombinedOperation(combinedOperation) ===
      false
    ) {
      return false;
    }

    return true;
  }

  static doCombinedOperation(combinedOperation) {
    var string = combinedOperation.join("");
    string = string.replace(/x/g, "*");
    string = string.replace(/:/g, "/");
    string = string.replace(/\[/g, "(");
    string = string.replace(/\]/g, ")");
    try {
      var res = eval(string);

      return res;
    } catch (e) {
      return false;
    }
  }
  doOperation(array) {
    if (array[0] == "[" || array[0] == "(") {
      var number1 = parseInt(array[1]);
      var operation = array[2];
      var number2 = parseInt(array[3]);
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
    } else {
      var number1 = parseInt(array[0]);
      var operation = array[1];
      var number2 = parseInt(array[2]);
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
}

export { OperacionesCombinadasClass };
