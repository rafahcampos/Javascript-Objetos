
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

for(chave in estudante)
{
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const text = `A chave "${chave}" em estudante, tem o valor de "${estudante[chave]}"`
        console.log(text);

    }
    
    
};
