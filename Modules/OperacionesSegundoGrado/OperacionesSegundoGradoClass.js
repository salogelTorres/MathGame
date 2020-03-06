class OperacionesSegundoGradoClass {
  constructor(A, B, C) {
    this.A = this.set(A);
    this.B = this.set(B);
    this.C = this.set(C);
    this.printA = this.print(A);
    this.printB = this.print(B);
    this.printC = this.print(C);
    this.output = {
      generalFormula: "x=(-b+-sqrt(b^2-4*a*c))/(2*a)",
      params: `a=${this.printA}, b=${this.printB}, c=${this.printC} `,
      discriminantFormula: "x=b^2-4*a*c",
      steps: [],
      stepsComprobation: []
    };
    this.discriminant = "";
    this.solutions = [];

    this.exec();
    console.log(this);
    return this.output;
  }

  exec() {
    this.discriminant = this.setDiscriminant(this.A, this.B, this.C);
    this.setEcuation();
    this.evaluateDiscriminant(this.discriminant);
    if (this.output.typeOfSolution == 2) {
      // Generamos las soluciones
      this.solutions.push(
        (-this.B + Math.sqrt(this.discriminant)) / (2 * this.A)
      );
      this.solutions.push(
        (-this.B - Math.sqrt(this.discriminant)) / (2 * this.A)
      );

      // Generamos los pasos para llegar a la solución
      // Step1
      this.output.steps.push(
        "x=(-" +
          this.printB +
          "+-sqrt(" +
          this.printB +
          "^2-4*" +
          this.printA +
          "*" +
          this.printC +
          "))/(2*" +
          this.printA +
          ")"
      );
      // Step2
      this.output.steps.push(
        "x=(" +
          -this.B +
          "+-sqrt(" +
          this.print(this.B ** 2) +
          "-" +
          this.print(4 * this.A * this.C) +
          "))/" +
          this.print(2 * this.A) +
          ""
      );
      // Step3
      this.output.steps.push(
        "x=(" +
          -this.B +
          "+-sqrt(" +
          this.print(this.B ** 2 - 4 * this.A * this.C) +
          "))/" +
          this.print(2 * this.A) +
          ""
      );
      // Step4
      this.output.steps.push(
        "x1=(" +
          -this.B +
          "+" +
          this.print(Math.sqrt(this.discriminant)) +
          ")/" +
          this.print(2 * this.A) +
          ", x2=(" +
          -this.B +
          "-" +
          this.print(Math.sqrt(this.discriminant)) +
          ")/" +
          this.print(2 * this.A) +
          ""
      );
      // Step5
      this.output.steps.push(
        "x1=(" +
          this.print(-this.B + Math.sqrt(this.discriminant)) +
          ")/(" +
          this.print(2 * this.A) +
          "), x2=(" +
          this.print(-this.B - Math.sqrt(this.discriminant)) +
          ")/" +
          this.print(2 * this.A) +
          ""
      );
      // Step6
      this.output.steps.push(
        "x1=" +
          this.print(-this.B + Math.sqrt(this.discriminant)) +
          "/" +
          this.print(2 * this.A) +
          ", x2=" +
          this.print(-this.B - Math.sqrt(this.discriminant)) +
          "/" +
          this.print(2 * this.A)
      );
      // Step7
      this.output.steps.push(
        "x1=" +
          this.print((-this.B + Math.sqrt(this.discriminant)) / (2 * this.A)) +
          ", x2=" +
          this.print((-this.B - Math.sqrt(this.discriminant)) / (2 * this.A))
      );

      // Generamos los pasos de la comprobación
      this.output.stepsComprobation.push(
        [
          "x1=" +
            this.print(this.A) +
            "*" +
            this.print(this.solutions[0]) +
            "^2+" +
            this.print(this.B) +
            "*" +
            this.print(this.solutions[0]) +
            "+" +
            this.print(this.C) +
            "=0"
        ],
        [
          "x2=" +
            this.print(this.A) +
            "*" +
            this.print(this.solutions[1]) +
            "^2+" +
            this.print(this.B) +
            "*" +
            this.print(this.solutions[1]) +
            "+" +
            this.print(this.C) +
            "=0"
        ]
      );
      this.output.stepsComprobation.push(
        [
          "x1=" +
            this.print(this.A * this.solutions[0] ** 2) +
            "+" +
            this.print(this.B * this.solutions[0]) +
            "+" +
            this.print(this.C) +
            "=0"
        ],
        [
          "x2=" +
            this.print(this.A * this.solutions[1] ** 2) +
            "+" +
            this.print(this.B * this.solutions[1]) +
            "+" +
            this.print(this.C) +
            "=0"
        ]
      );

      this.output.stepsComprobation.push(
        [
          "x1=" +
            this.print(
              this.A * this.solutions[0] ** 2 +
                this.B * this.solutions[0] +
                this.C
            ) +
            "=0"
        ],
        [
          "x2=" +
            this.print(
              this.A * this.solutions[1] ** 2 +
                this.B * this.solutions[1] +
                this.C
            ) +
            "=0"
        ]
      );
    } else if (this.output.typeOfSolution == 1) {
      this.solutions.push(-this.B / (2 * this.A));
      this.output.steps.push(
        "x=(-" +
          this.printB +
          "+-sqrt(" +
          this.printB +
          "^2-4*" +
          this.printA +
          "*" +
          this.printC +
          "))/(2*" +
          this.printA +
          ")"
      );
      this.output.steps.push(
        "x=(-" +
          this.printB +
          "+-sqrt(" +
          this.print(this.discriminant) +
          "))/(2*" +
          this.printA +
          ")"
      );
      this.output.steps.push(
        "x=(-" +
          this.printB +
          "+-" +
          this.print(Math.sqrt(this.discriminant)) +
          ")/(2*" +
          this.printA +
          ")"
      );
      this.output.steps.push(
        "x=(" +
          this.print(-this.B + Math.sqrt(this.discriminant)) +
          ")/(2*" +
          this.printA +
          ")"
      );
      this.output.steps.push(
        "x=" +
          this.print(-this.B + Math.sqrt(this.discriminant)) +
          "/" +
          this.print(2 * this.A)
      );
      this.output.steps.push(
        "x=" +
          this.print((-this.B + Math.sqrt(this.discriminant)) / (2 * this.A))
      );

      // Generamos los pasos de la comprobación
      this.output.stepsComprobation.push(
        "x=" +
          this.print(this.A) +
          "*" +
          this.print(this.solutions[0]) +
          "^2+" +
          this.print(this.B) +
          "*" +
          this.print(this.solutions[0]) +
          "+" +
          this.print(this.C) +
          "=0"
      );
      this.output.stepsComprobation.push(
        "x=" +
          this.print(this.A * this.solutions[0] ** 2) +
          "+" +
          this.print(this.B * this.solutions[0]) +
          "+" +
          this.print(this.C) +
          "=0"
      );

      this.output.stepsComprobation.push(
        "x=" +
          this.print(
            this.A * this.solutions[0] ** 2 +
              this.B * this.solutions[0] +
              this.C
          ) +
          "=0"
      );
    } else if (this.output.typeOfSolution == -1) {
      this.solutions.push("No tiene soluciones reales");
    }
  }

  set(param) {
    if (!isNaN(param)) {
      return param;
    } else {
      throw "Se esperaba recibir un numero entero";
    }
  }
  print(param) {
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
  round2Decimals(numero) {
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante * 100) / 100;
    return resultado;
  }
  setDiscriminant(A, B, C) {
    var ret = B ** 2 - 4 * A * C;
    this.output.discriminant = `${B}^2-4*${A}*${C}=${ret}`;
    return ret;
  }
  setEcuation() {
    this.output.ecuation = `${this.A}x^2 + ${this.B}x + ${this.C} = 0`;
  }

  evaluateDiscriminant(discriminant) {
    if (discriminant > 0) {
      this.output.typeOfSolution = 2;
    } else if (discriminant == 0) {
      this.output.typeOfSolution = 1;
    } else {
      this.output.typeOfSolution = -1;
    }
  }
}

export { OperacionesSegundoGradoClass };
