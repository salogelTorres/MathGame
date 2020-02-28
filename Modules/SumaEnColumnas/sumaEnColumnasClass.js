class sumaEnColumnasClass {
  constructor(sumandos) {
    this.sumandos = sumandos;
    this.suma = this.generaSuma(this.sumandos);
    this.sumaDimension = this.dimension(this.suma);
    this.sumandosSplit = this.generateSumandosSplit(this.sumandos);
    this.sumaSplit = this.splitNumber(this.suma);
    this.llevaSplit = this.generateLlevaArray(this.sumandosSplit);

    return this.result();
  }

  generaSuma(array) {
    var sum = 0;
    array.forEach(element => {
      sum += element;
    });
    return sum;
  }

  generateSumandosSplit(array) {
    var ret = [];
    array.forEach(element => {
      ret.push(this.splitNumber(element));
    });
    return ret;
  }

  dimension(number) {
    return number.toString().length;
  }

  splitNumber(number) {
    var rev = number
      .toString()
      .split("")
      .reverse();
    var ret = [];
    rev.forEach(element => {
      ret.push(parseInt(element));
    });
    return this.completeZeros(ret, this.sumaDimension);
  }

  completeZeros(number, dim) {
    while (number.length < dim) {
      number.push("");
    }
    return number;
  }

  generateLleva(array1, array2) {
    var ret = [];
    for (var i = 0; i < this.sumaDimension; i++) {
      ret[i] = parseInt((array1[i] + array2[i]) / 10);
    }
    return ret;
  }

  generateLlevaArray(arrayOfArrays) {
    var ret = [];
    var resto = 0;
    var lleva = 0;
    for (var i = 0; i < this.sumaDimension; i++) {
      var sum = 0;
      arrayOfArrays.forEach(element => {
        if (element[i] != "") {
          sum += element[i] + resto;
        }
      });
      lleva = parseInt(sum / 10);
      resto = lleva;
      ret.push(lleva);
    }
    return ret;
  }
  result() {
    var sumandoSplit = [];
    this.sumandosSplit.forEach(sumando => {
      sumandoSplit.push(sumando.reverse());
    });
    return {
      lleva: this.llevaSplit.reverse(),
      sumandos: sumandoSplit,
      suma: this.sumaSplit.reverse()
    };
  }
}

export { sumaEnColumnasClass };
