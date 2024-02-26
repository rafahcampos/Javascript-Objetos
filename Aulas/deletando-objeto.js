//deletando um objeto

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
};

console.log(objPersonagem);
console.log(objPersonagem.aliado.nome); //Acessando um elemento que está dentro de um outro elemento

//delete objPersonagem.aliado; //removido todo o objeto aliado
//delete objPersonagem["status"]; //utilizando a notação de colchetes
//console.log(objPersonagem);

const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereço"]; //elemento não existente

console.log(delProp); //true
console.log(delPropInexistente); //true

console.log(objPersonagem);

