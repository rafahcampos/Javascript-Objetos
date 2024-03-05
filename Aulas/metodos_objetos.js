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
    },
    {
        rua: 'Rua Jiseph',
        numero: '45', 
        complemento: null
    }]
};

const objectKey = Object.keys(estudante);

if(!objectKey.includes('turma')){
    console.error('Não possui uma turma cadastrada')
}

const objectValues = Object.values(estudante);

const objectEntries = Object.entries(estudante);

console.log(objectValues);
console.log(objectEntries);