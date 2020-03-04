class OperacionesSegundoGradoClass {
  construct(A, B, C) {
    this.A = set(A);
    this.B = set(B);
    this.C = set(C);
    this.output = {};
    
  }

  set(param) {
    if (Number.isInteger(param)) {
      return param;
    } else {
      throw "Se esperaba recibir un numero entero";
    }
  }

  discriminant(A, B, C) {
    this.output.discriminant = B + "^2-4*" + A + "*" + C;
    return B ** 2 - 4 * A * C;
  }

  evaluateDiscriminant(discriminant) {
    if (discriminant > 0) {
    }
  }
}

export { OperacionesSegundoGradoClass };
