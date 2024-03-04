/*Ex4 */


numeros = [10,10,10];

const calculadora = {
  soma: function (x, y) {
    return x + y;
  },
  subtracao: function (x, y) {
    return x - y;
  },
  multiplicacao: function (x, y) {
    return x * y;
  },
  divisao: function (x, y) {
    if (y == 0) {
      return "Não é possivel dividir po 0!!!";
    } else {
      return x / y;
    }
  },
  calcularMedia: function (num) {
    const soma = num.reduce((total, num) => total + num, 0);
    return soma / num.length;

  }
};

console.log('-----------------------');
console.log(`Soma: ${calculadora.soma(10, 2)}`);
console.log(`Subtracao: ${calculadora.subtracao(10, 2)}`);
console.log(`Multiplicação: ${calculadora.multiplicacao(10, 2)}`);
console.log(`Divisão: ${calculadora.divisao(10, 2)}`);
console.log(`Divisão po 0: ${calculadora.divisao(10, 0)}`);
console.log('-----------------------');

console.log(`Média: ${calculadora.calcularMedia(numeros)}`);
