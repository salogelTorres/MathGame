class OperacionesCombinadasClass{
    constructor(combinedOperation){
        this.combinedOperation = combinedOperation;  
        this.combinedOperationSplit = this.combinedOperation.split(" ");
        
        return this;
    }


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

 export{OperacionesCombinadasClass}