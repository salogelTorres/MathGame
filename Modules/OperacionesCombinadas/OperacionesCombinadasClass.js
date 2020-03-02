class OperacionesCombinadasClass {
  constructor(combinedOperation) {
    this.combinedOperation = this.setCombinedOperation(combinedOperation);
    this.firstOperationPosition = 0;
    this.result = "";
    this.output = [];

    this.exec();

    return this;
  }

  exec() {
    this.result = OperacionesCombinadasClass.doCombinedOperation(
      this.combinedOperation
    );
    for (var i = 0; i < 11; i++) {
      this.firstOperationPosition = 0;

      var operation = this.combinedOperation;
      while (!this.isBasicOperation(operation)) {
        operation = this.findFirstOperation(operation);
      }
      var resultOperation = this.doOperation(operation);
      this.generateOutput(resultOperation);
    }
  }
  generateOutput(resultOperation) {
    this.combinedOperation.splice(
      this.firstOperationPosition,
      3,
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
    console.log(this.combinedOperation);

    this.output.push(this.combinedOperation);
  }

  doFirstOperation(combinedOperation) {
    var operation = combinedOperation;
    while (!this.isBasicOperation(operation)) {
      operation = this.findFirstOperation(operation);
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
      // console.log(combinedOperation.indexOf("x") + " "+ combinedOperation.indexOf(":"));

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

  isBasicOperation(combinedOperation) {
    if (combinedOperation.length != 3) {
      return false;
    }
    if (OperacionesCombinadasClass.doCombinedOperation(combinedOperation)) {
      return true;
    } else {
      return false;
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
      return combinedOperation.split(" ");
    } else if (typeof combinedOperation == "object") {
      return combinedOperation;
    }
  }
  validateCombinedOperation(combinedOperation) {
    if (!OperacionesCombinadasClass.doCombinedOperation(combinedOperation)) {
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

export { OperacionesCombinadasClass };
