//Ex-3

const carro = {
    marca: 'Fiat',
    modelo: 'Gol',
    ano: 1988,
    cor: 'azul',
    ligado: true,
    ligar: function () {
        if (!this.ligado) {
            this.ligado = true;
            return console.log("O carro foi LIGADO");
        } else if (this.ligado) {
            return console.log("O carro não pode ser ligado novamente");
        }
    },
    desligar: function () {
        if (this.ligado) {
            this.status = true;
            return console.log("O carro foi desligado");
        } else if (!this.ligado) {
            return console.log("Não foi possivel DESLIGAR o carro. Carro já desligado");
        }
    }
};

function ObterDetalhes() {
    const status = this.ligado ? 'Ligar' : 'Desligar';

    console.log(`
    Marca: ${carro.marca},
    Modelo: ${carro.modelo},
    Ano: ${carro.ano},
    Cor: ${carro.cor},
    Status: ${status}  `);
};
ObterDetalhes();

carro.ligar;

ObterDetalhes();
