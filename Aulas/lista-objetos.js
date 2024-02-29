//lista-objetos


const estudante = {
    nome: 'José' ,
    idade: 32,
    cpf: '233342354234',
    turma: 'Java',
    bolsista: true,
    telefone: ['234342234','23435432'],
    endereco: [{
        rua: 'Rua Jiseph',
        numero: '45', 
        complemento: '55'
    }]
    
};

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);

estudante.endereco.push({
    rua:'jaca',
    numero: '88',
    complemento: ''
});

//console.log();
//console.log(estudante.endereco[0]);
//console.log(estudante.endereco[1]);

const listaDeEnredecos = estudante.endereco.filter((endereco) => 
endereco.complemento
);

console.log(listaDeEnredecos);  //NÃO vai exibir somente os endereços que forem vazios e que forem null