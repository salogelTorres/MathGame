class OperacionesSegundoGradoHelpers {
    constructor() {

    }

    static generarCoeficientes(percent1, percent2, percent3, percent4) {
        //percent1 -> porcentaje destinado a 2 soluciones enteras
        //percent2 -> porcentaje destinado a 2 soluciones reales
        //percent3 -> porcentaje destinado a 1 solución real doble
        //percent4 -> porcentaje destinado a ninguna solución real
        if (percent1 < 0) {                 //Control del primer porcentaje
            var prob1 = 0;
        } else if (percent1 > 1) {
            var prob1 = 1;
        } else {
            var prob1 = percent1;
        }

        if (percent2 < 0) {                 //Control del segundo porcentaje
            var prob2 = 0;
        } else if (percent2 > 1) {
            var prob2 = 1;
        } else {
            var prob2 = percent2;
        }

        if (percent3 < 0) {                 //Control del tercer porcentaje
            var prob3 = 0;
        } else if (percent3 > 1) {
            var prob3 = 1;
        } else {
            var prob3 = percent3;
        }

        if (percent4 < 0) {                 //Control del cuarto porcentaje
            var prob4 = 0;
        } else if (percent4 > 1) {
            var prob4 = 1;
        } else {
            var prob4 = percent4;
        }
        //Control del total de probabilidad a 1
        if (prob1 + prob2 + prob3 + prob4 < 1) {
            prob1 = (1 - prob2 - prob3 - prob4);
        }
        if (prob1 + prob2 > 1) {
            prob2 = 0;
            prob3 = 0;
            prob4 = 0;
            prob1 = 1;
        } else if (prob1 + prob2 + prob3 > 1) {
            prob3 = 0;
            prob4 = 0;
            prob1 = 1 - prob2;
        } else if (prob1 + prob2 + prob3 + prob4 > 1) {
            prob4 = 0;
            prob1 = 1 - (prob2 + prob3 + prob4);
        }
        // console.log(prob1 + " - " + prob2 + " - " + prob3 + " - " + prob4);

        //elección de qué tipo de operación se llevará a cabo
        var eleccion = Math.random();
        // console.log(eleccion); 
        if (eleccion > 0 &&
            eleccion <= prob1) {
            // estructura (a1x+b1)*(c1x+d1) Soluciones Enteras
            var a1 = 1;
            var b1 = Math.round(Math.random() * 30 - 15);
            var c1 = 1;
            var d1 = Math.round(Math.random() * 30 - 15);
            
            var a = a1 * c1;
            var b = a1 * d1 + b1 * c1;
            var c = b1 * d1;

        } else if (eleccion > prob1 &&
            eleccion <= prob1 + prob2) {
            // estructura (a1x+b1)*(c1x+d1) Soluciones Reales
            var a1 = Math.round(Math.random() * 20 - 10);
            var b1 = Math.round(Math.random() * 20 - 10);
            var c1 = Math.round(Math.random() * 20 - 10);
            var d1 = Math.round(Math.random() * 20 - 10);

            var control = 0;                        //Control de a1 y c1 != 0
            while (a1 == 0 && control<=10) {
                a1 = Math.round(Math.random() * 20 - 10);
                control++;
            }
            if (a1 == 0) {
                a1 = 1;
            }
            control = 0;
            while (c1 == 0 && control<=10) {
                c1 = Math.round(Math.random() * 20 - 10);
                control++;
            }
            if (c1 == 0) {
                c1 = 1;
            }

            var a = a1 * c1;
            var b = a1 * d1 + b1 * c1;
            var c = b1 * d1;
        } else if (eleccion > prob1 + prob2 &&
            eleccion <= prob1 + prob2 + prob3) {
            // estructura (a1x+b1)*(c1x+d1) Solución Dobles
            var a1 = Math.round(Math.random() * 50 - 25);
            var b1 = Math.round(Math.random() * 50 - 25);
            
            var control = 0;                        //Control de a1 != 0
            while (a1 == 0 && control<=10) {
                a1 = Math.round(Math.random() * 20 - 10);
                control++;
            }
            if (a1 == 0) {
                a1 = 1;
            }
            
            var c1 = a1;
            var d1 = b1;
            
            var a = a1 * c1;
            var b = a1 * d1 + b1 * c1;
            var c = b1 * d1;
        } else if (eleccion > prob1 + prob2 + prob3 &&
            eleccion <= prob1 + prob2 + prob3 + prob4) {
            // estructura (a1x+b1)*(c1x+d1) Sin solución
            var a = Math.round(Math.random() * 30 - 15);

            var control = 0;                        //Control de a != 0
            while (a == 0 && control<=10) {
                a = Math.round(Math.random() * 20 - 10);
                control++;
            }
            if (a == 0) {
                a = 1;
            }

            var b = Math.round(Math.random() * 30 - 15);
            var limite = (b ** 2) / (4 * a);
            var c = Math.round(Math.random() * limite + limite);

            // console.log(a1+" - "+b1+" - "+c1+" - "+d1);
            // console.log(limite);
            // console.log(a+" - "+b+" - "+c);
        }

        var resultado = [a, b, c];

        return resultado;

    }

    static print(param) {
        if (!isNaN(param)) {
            if (param < 0) {
                return "(" + OperacionesSegundoGradoHelpers.round2Decimals(param) + ")";
            } else {
                return OperacionesSegundoGradoHelpers.round2Decimals(param);
            }
        } else {
            throw "Se esperaba recibir un numero entero";
        }
    }
    static round2Decimals(numero) {
        var flotante = parseFloat(numero);
        var resultado = Math.round(flotante * 100) / 100;
        return resultado;
    }


}

export { OperacionesSegundoGradoHelpers }


