//Ex-4

const carro = {
    marca: "Fiat",
    modelo: "Gol",
    ano: 1988,
    cor: "azul",
    ligado: true,
    placa: 'EVD-4453'
  };

for (let chave in carro){
    console.log(`${chave} : ${carro[chave]}`);
}


Object.defineProperty(carro, "placa", {enumerable:true});

console.log(carro.placa);