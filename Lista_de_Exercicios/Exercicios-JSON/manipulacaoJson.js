//a) Leia o conteúdo do arquivo animais.json.

const animaisList = require('./animais.json');

//b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

const animaisListString = JSON.stringify(animaisList);

const animaisListObject = JSON.parse(animaisListString);

console.log(animaisListObject);

//c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

const novoAnimal = {
    "id":4,
    "nome": "Veado",
    "tipo": "Especifico",
    "habitat": "Africa"
};

animaisList.animais.push(novoAnimal);

console.log(animaisList);

