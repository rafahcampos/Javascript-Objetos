//a) Leia o conteúdo do arquivo animais.json.

const animaisList = require('./animais.json');

//b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

const animaisListString = JSON.stringify(animaisList);

const animaisListObject = JSON.parse(animaisListString);

//console.log(animaisListObject);

//c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

const novoAnimal = {
    "id":4,
    "nome": "Veado",
    "tipo": "Especifico",
    "habitat": "Africa"
};

animaisListObject.animais.push(novoAnimal);

console.log(animaisListObject);

//d) Modifique o habitat de um animal existente no array de animais.

const modificarAnimal = animaisListObject.animais.find(animal => animal.id === 4); //função que guarda uma propriedade especifica em um objeto para uma posteior modificação

modificarAnimal.habitat = 'Asiatico';

console.log(animaisListObject);

//e) Remova um animal do array de animais.


const removerAnimal = animaisListObject.animais.findIndex(animal => animal.id === 3);

delete animaisListObject.animais[removerAnimal];

console.log(animaisListObject);

//f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

const novaAnimaisListString = JSON.stringify(animaisListObject);

//g) Imprima no console o objeto JavaScript resultante das operações.
console.log(novaAnimaisListString);

