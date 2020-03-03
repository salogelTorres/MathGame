class OperacionesCombinadasHelpers {
    constructor(num, dimen, level) {
        this.numeroDeOperaciones = num;
        this.nivel = level;
        this.dimension = dimen;

        return this.crearCombinedOperation();

    }

    crearCombinedOperation() {
        var operacion = [];

        var indice = this.numeroDeOperaciones;
        var contador = 0;
        while (indice > 0) {

            OperacionesCombinadasHelpers.operacionAleatoria(operacion, this.dimension, this.nivel, indice);

            contador = 0;
            for (var i = 0; i <= operacion.length; i++) {
                if (operacion[i] === "+" ||
                    operacion[i] === "-" ||
                    operacion[i] === "x" ||
                    operacion[i] === ":") {
                    contador++;
                }
            }
            console.log("contador " + contador);
            indice = this.numeroDeOperaciones - contador;
            console.log("indice " + indice);
        }

        console.log(operacion);
        return operacion;
    }



    // Funciones para operaciones sencillas que crean o añaden su operacion al vector de la operación total

    // Sumas Naturales

    static crearSuma(array, dimension) {
        var operacion = array;
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        operacion.push("+");
        operacion.push(Math.round(Math.random() * 10 ** dimension));

        return operacion;
    }

    static añadirSuma(array, dimension) {
        var operacion = array;
        operacion.push("+");
        operacion.push(Math.round(Math.random() * 10 ** dimension));

        return operacion;
    }

    static añadirSumaParentesis(array, dimension, numberOfOperations, level) {
        var operacion = array;
        var numeroDeOperaciones = numberOfOperations;
        var nivel = level;

        operacion.push("+");
        operacion.push("(");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        for (var i = 0; i < numeroDeOperaciones; i++) {
            OperacionesCombinadasHelpers.operacionAleatoria(operacion, dimension, nivel, numberOfOperations);
        }
        operacion.push(")");

        return operacion;
    }



    static generarSuma(result) {
        var resultado = result;
        var operacion = [];
        var minimo = 1;               //para evitar 0 en el primer sumando
        var maximo = result - 1;      //Para evitar 0 en el último sumando

        var numero1 = Math.round(Math.random() * (maximo - minimo) + minimo);
        var numero2 = result - numero1;
        operacion.push(numero1);
        operacion.push("+");
        operacion.push(numero2);

        console.log(operacion);
        return operacion;
    }

    static generarSumaMultiple(result, numberOfAddends, dimension) {
        var resultado = result;
        var sumandos = numberOfAddends;
        var operacion = [];
        var numero = 0;
        var subtotal = 0;
        var minimo = 1;               //para evitar 0 en sumandos
        var maximo = result - 1;      //Para evitar 0 en el último sumando
        operacion.push("(");
        for (var i = 0; i < sumandos; i++) {
            if (i == sumandos - 1) {
                numero = resultado - subtotal;
                operacion.push(numero);
            } else {
                numero = Math.round(Math.random() * (maximo + i - sumandos - minimo) + minimo);
                // console.log(minimo + "-" + maximo);
                subtotal += numero;
                maximo -= numero;
                operacion.push(numero);
                operacion.push("+");
            }
        }
        operacion.push(")");
        console.log(operacion);
        return operacion;
    }

    // Restas Naturales

    static crearResta(array, dimension) {
        var operacion = array;
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        operacion.push("-");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        return operacion;
    }

    static añadirResta(array, dimension) {
        var operacion = array;
        operacion.push("-");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        return operacion;
    }

    static añadirRestaParentesis(array, dimension, numberOfOperations, level) {
        var operacion = array;
        var numeroDeOperaciones = numberOfOperations;
        var nivel = level;

        operacion.push("-");
        operacion.push("(");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        for (var i = 0; i < numeroDeOperaciones; i++) {
            OperacionesCombinadasHelpers.operacionAleatoria(operacion, dimension, nivel, numberOfOperations);
        }
        operacion.push(")");

        return operacion;
    }

    // Productos Naturales

    static crearProducto(array, dimension) {
        var operacion = array;
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        operacion.push("x");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        return operacion;
    }

    static añadirProducto(array, dimension) {
        var operacion = array;
        operacion.push("x");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        return operacion;
    }

    static añadirProductoParentesis(array, dimension, numberOfOperations, level) {
        var operacion = array;
        var numeroDeOperaciones = numberOfOperations;
        var nivel = level;

        operacion.push("x");
        operacion.push("(");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        for (var i = 0; i < numeroDeOperaciones; i++) {
            OperacionesCombinadasHelpers.operacionAleatoria(operacion, dimension, nivel, numberOfOperations);
        }
        operacion.push(")");

        return operacion;
    }

    // Divisiones Naturales

    static crearDivision(array, dimension) {
        var operacion = array;
        var divisor = Math.round(Math.random() * 10 ** dimension);
        while (divisor == 0) {
            divisor = Math.round(Math.random() * 10 ** dimension);
        }
        var dividendo = divisor * Math.round(Math.random() * 10 ** (dimension - 1));
        if (dividendo == 0) {
            dividendo = divisor * Math.round(Math.random() * 10 ** (dimension - 1));
        } else if (dividendo == 0) {
            dividendo = divisor * Math.round(Math.random() * 10 ** (dimension - 1));
        }
        operacion.push(dividendo);
        operacion.push(":");
        operacion.push(divisor);

        return operacion;
    }

    static incluirDivision(array, dimension, position) {
        var operacion = array;
        var posicion = position;

        var resultado = Math.round(Math.random() * 10 ** (dimension - 1));
        while (resultado == 0) {
            resultado = Math.round(Math.random() * 10 ** dimension);
        }

        var numero1 = Math.round(Math.random() * 10 ** (dimension - 1));
        while (numero1 == 0) {
            numero1 = Math.round(Math.random() * 10 ** dimension);
        }
        var numero2 = resultado * numero1;

        operacion.splice(posicion, 1, numero2);
        operacion.splice(posicion + 1, 0, ":");
        operacion.splice(posicion + 2, 0, numero1);

        // console.log(operacion);
        return operacion;
    }

    //Paréntesis y Corchetes

    static incluirParentesis(array, dimension, position, numOperations, result, level) {
        var operacion = array;
        var posicion = position;
        var resultado = result;
        var resultadoTemporal = 0;
        var nivel = level;
        var numeroDeOperaciones = numOperations;
        var operacionTemporal = [];


        for (var i = 0; i < numeroDeOperaciones; i++) {
            OperacionesCombinadasHelpers.operacionAleatoria(operacionTemporal, dimension, nivel - 1);
        }
        console.log(eval(operacionTemporal.join("")));
        resultadoTemporal = eval(operacionTemporal.join(""));
        if (resultadoTemporal != resultado) {
            var numero1 = resultado - resultadoTemporal;
        }


        operacion.splice(posicion, 1, "(");
        var index = 0;
        for (var i = 0; i < operacionTemporal.length; i++) {
            operacion.splice(posicion + 1 + i, 0, operacionTemporal[i]);
            index++;
        }
        operacion.splice(index + 1, 0, "+");
        operacion.splice(index + 2, 0, numero1);
        operacion.splice(index + 3, 0, ")");

        return operacion;
    }

    static crearParentesis(array, dimension, numberOfOperations, level) {
        var operacion = array;
        var numeroDeOperaciones = numberOfOperations;
        var nivel = level;

        operacion.push("(");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        for (var i = 0; i < numeroDeOperaciones; i++) {
            OperacionesCombinadasHelpers.operacionAleatoria(operacion, dimension, nivel, numberOfOperations);
        }
        operacion.push(")");

        return operacion;
    }


    // Aleatorias

    static operacionAleatoria(array, dimension, level, opRemaining) {
        // Recogida de datos
        var operacion = array;
        if (dimension <= 0) {
            dimension = 1;
        }

        var nivel = 0;
        var nivelesPreparados = 4;

        if (level > nivelesPreparados) {
            nivel = nivelesPreparados;
        } else if (level < 0) {
            nivel = 0;
        } else if (level == "") {
            nivel = Math.round(Math.random() * (nivelesPreparados));
        } else {
            nivel = level;
        }

        var limiteDeOperaciones = opRemaining; //Solo necesario en caso de añadir () o []
        if (limiteDeOperaciones <= 1) {
            nivel = 2;                         // Para evitar que entre en () o [] si solo puede poner una operación            
        }
        console.log("limite " + limiteDeOperaciones);

        // Decisión de qué operaciones se pueden ejecutar por nivel.
        // level = 0 --> + y -
        // level = 1 --> + , - y x
        // level = 2 --> + , - , x y :
        // level = 3 --> + , - , x , : y ()
        // level = 4 --> + , - , x , : , () y []
        switch (nivel) {
            case 0:
                var numeroDeOperacionesPosibles = 2;
                break;
            case 1:
                var numeroDeOperacionesPosibles = 3;
                break;
            case 2:
                var numeroDeOperacionesPosibles = 4;
                break;
            case 3:
                var numeroDeOperacionesPosibles = 7;
                break;
            // case 4:
            //     var numeroDeOperacionesPosibles = 2;
            //     break;

            default:
                console.log("Error de generación aleatoria");
                break;
        }

        var eleccion = Math.round(Math.random() * (numeroDeOperacionesPosibles - 1) + 1);

        // Evitar que la primera y segunda elección sean 4 consecutivos. Para salvar error de bucle infinito.
        while (operacion.length == 3 && operacion.includes(":") && eleccion == 4) {
            eleccion = Math.round(Math.random() * (numeroDeOperacionesPosibles - 1) + 1);
        }
        console.log("elección " + eleccion);

        // Aplicar la eleccion
        switch (eleccion) {
            case 1:
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearSuma(operacion, dimension);
                } else {
                    OperacionesCombinadasHelpers.añadirSuma(operacion, dimension);
                }

                break;
            case 2:
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearResta(operacion, dimension);
                } else {
                    OperacionesCombinadasHelpers.añadirResta(operacion, dimension);
                } break;
            case 3:
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearProducto(operacion, dimension);
                } else {
                    OperacionesCombinadasHelpers.añadirProducto(operacion, dimension);
                }
                break;

            case 4:
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearDivision(operacion, dimension);
                } else {
                    var posicion = Math.round(Math.random() * (operacion.length));
                    var index = 0;
                    while ((isNaN(operacion[posicion]) == true ||
                        operacion[posicion - 1] == ":" ||
                        operacion[posicion + 1] == ":") &&
                        index <= 10) {
                        posicion = Math.round(Math.random() * (operacion.length));
                        index++;
                        console.log("probando");
                    }
                    if (index >= 10) {
                        OperacionesCombinadasHelpers.añadirProducto(operacion, dimension, posicion);

                    } else {
                        OperacionesCombinadasHelpers.incluirDivision(operacion, dimension, posicion);
                    }

                }
                break;
            case 5:
                var hacerXOperaciones = Math.round(Math.random() * (limiteDeOperaciones - 1) + 1);
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearParentesis(operacion, dimension, hacerXOperaciones, 2);
                } else {
                    OperacionesCombinadasHelpers.añadirSumaParentesis(operacion, dimension, hacerXOperaciones, 2);
                }

                break;
            case 6:
                var hacerXOperaciones = Math.round(Math.random() * (limiteDeOperaciones - 1) + 1);
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearParentesis(operacion, dimension, hacerXOperaciones, 2);
                } else {
                    OperacionesCombinadasHelpers.añadirRestaParentesis(operacion, dimension, hacerXOperaciones, 2);
                }

                break;
            case 7:
                var hacerXOperaciones = Math.round(Math.random() * (limiteDeOperaciones - 1) + 1);
                if (operacion.length == 0) {
                    OperacionesCombinadasHelpers.crearParentesis(operacion, dimension, hacerXOperaciones, 2);
                } else {
                    OperacionesCombinadasHelpers.añadirProductoParentesis(operacion, dimension, hacerXOperaciones, 2);
                }

                break;


            default:
                console.log("Error de generación aleatoria");
                break;
        }
        return operacion;
    }

}

// Funciones de ayuda
// eval(array.join(""));
// if (operacion.length == 0) {} else {}

export { OperacionesCombinadasHelpers };