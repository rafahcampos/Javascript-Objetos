//Objetos

const estudante = {
    nome: 'José Silva' ,
    idade: 32,
    cpf: '1233456789',
    turma: 'JavaScript'
};

console.log(estudante.nome);

console.log(`O estudande ${estudante.nome} de ${estudante.idade} anos, possuidor do CPF ${estudante.cpf.substring(0,3)}.***.***-** está matriculado devidamente na disciplina de ${estudante.turma}`);