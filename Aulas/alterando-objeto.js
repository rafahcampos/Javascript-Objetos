//adicionando_E_alterando-objeto

const estudante = {
    nome: 'José Silva' ,
    idade: 32,
    cpf: '1233456789',
    turma: 'JavaScript'
};

estudante.telefone = '553434341251' // adicionando um elemento do objeto
console.log(estudante.telefone);
console.log(estudante);

estudante.nome = 'João Cabral'; //alterando um elemento do objeto
console.log(estudante);

const estudante2 = {};
estudante2.nome = "Dialga";
console.log(estudante2);