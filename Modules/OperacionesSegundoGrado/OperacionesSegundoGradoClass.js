class OperacionesSegundoGradoClass {
  constructor(A, B, C) {
    this.A = this.set(A);
    this.B = this.set(B);
    this.C = this.set(C);
    this.output = {};
    this.setDiscriminant(this.A, this.B, this.C);
    this.setEcuation();
    return this.output;
  }

  set(param) {
    if (Number.isInteger(param)) {
      return param;
    } else {
      throw "Se esperaba recibir un numero entero";
    }
  }

  setDiscriminant(A, B, C) {
    this.output.discriminant = `sqrt(${B}^2-4*${A}*${C})`;
    return B ** 2 - 4 * A * C;
  }
  setEcuation(){
    this.output.ecuation = `${this.A}x^2 + ${this.B}x + ${this.C} = 0`;
  }
  

  evaluateDiscriminant(discriminant) {
    if (discriminant > 0) {
    }
  }
}

export { OperacionesSegundoGradoClass };
