const carro = {
    marca: 'Fiat',
    modelo: 'Gol',
    ano: 1988,
    cor: 'azul'
};

for(key in carro){
    console.log(`${key} - ${carro[key]}`);
}

carro.volante = 'prosifional';
carro.roda = 'redonda';

for(key in carro){
    console.log(`${key} - ${carro[key]}`);
}

