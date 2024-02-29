//objetos aninhados
const estudante = {
    nome: 'José' ,
    idade: 32,
    cpf: '233342354234',
    turma: 'Java',
    bolsista: true,
    telefone: ['234342234','23435432']
};

estudante.endereco = {
    rua: 'Rua Jiseph',
    numero: '45',
    complemento: 'apto40'
};

console.log(estudante);
console.log(estudante.endereco);
console.log(estudante.endereco.complemento);
