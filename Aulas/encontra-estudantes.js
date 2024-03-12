const estudantes = require('./estudantes.json');

function encontrarAluno(lista,chave,valor){
    return lista.find((estudante) => estudante[chave].includes(valor));  //include trabalha tanto com string quando com valores
};

const estudanteEncontrado = encontrarAluno(estudantes,'nome','Husein');
console.log(estudanteEncontrado);

const telefoneEncontrado = encontrarAluno(estudantes,'telefone','51993301028');
console.log(telefoneEncontrado);