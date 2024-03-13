
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 2, nome: "girafa", especie: "onotorrinco", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

//Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
};

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
};

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
};

const idadeCrescente = ordenarAnimais(compararIdadeCrescente);
console.log('Ordem Crescente');
console.log(idadeCrescente);

console.log('--------------------- ');

const idadeDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log('Ordem Decrescente');
console.log(idadeCrescente);