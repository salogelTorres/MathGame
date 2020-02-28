class OperacionesCombinadasHelpers {

    static crearSuma(dimension) {
        var operacion = [];
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        operacion.push("+");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        console.log(operacion);
        return operacion;
    }

    static crearResta(dimension) {
        var operacion = [];
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        operacion.push("-");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        console.log(operacion);
        return operacion;
    }

    static crearProducto(dimension) {
        var operacion = [];
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        operacion.push("x");
        operacion.push(Math.round(Math.random() * 10 ** dimension));
        console.log(operacion);
        return operacion;
    }

}

export { OperacionesCombinadasHelpers };