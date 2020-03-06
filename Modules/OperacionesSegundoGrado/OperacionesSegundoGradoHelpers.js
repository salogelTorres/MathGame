class OperacionesSegundoGradoHelpers {
    constructor() { 

    }

    static print(param) {
        if (!isNaN(param)) {
            if (param < 0) {
                return "(" + this.round2Decimals(param) + ")";
            } else {
                return this.round2Decimals(param);
            }
        } else {
            throw "Se esperaba recibir un numero entero";
        }
    }


}



