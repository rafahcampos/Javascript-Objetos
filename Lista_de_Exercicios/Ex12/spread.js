//Ex01

const pessoa = {
  nome: "John Snow",
  notas: [10, 7],

  calcularMediaNotas: function () {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / this.notas.length;
    return media.toFixed(2);
  },
  classificarDesempenho: function (media) {
    switch (media) {
      case media >= 9:
        console.log(`A média foi de ${media} - Desempenho excelente!!!`);
        break;
      case media >= 7.6 || media <= 8.9:
        console.log(`A média foi de ${media} - Bom desempenho!`);
        break;
      case media >= 6 || media <= 7.5:
        console.log(`A média foi de ${media} - Desempenho regular.`);
        break;
      case media < 6:
        console.log(`A média foi de ${media} - Desempenho insuficiente`);
        break;
    }
  },
};

const media = pessoa.calcularMediaNotas();
console.log(`A média das notas é: ${media}`);

pessoa.classificarDesempenho(media);
;