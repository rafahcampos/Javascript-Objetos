//Ex5

const carro = {
    marca: "Fiat",
    modelo: "Gol",
    ano: 1988,
    cor: "azul",
    ligado: true,
    placa: 'EVD-4453'
  };

const carroNovo = {
retrovisor: "Quadrado",
roda: "Redonda",
anoLancamento: 1978,
antena: "Pontuda",
}

const carroComNovosDetalhes = {...carro, ...carroNovo};

console.log(carroComNovosDetalhes);

carroComNovosDetalhes.cor = 'Amarelo';

console.log(carroComNovosDetalhes);