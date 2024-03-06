const estudante = {
    nome: 'Kakaroto Goku',
    idade: 36,
    cpf: '43423422690',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['998223344', '988776655'],
    enderecos: [{
        rua: 'Rua da Roça',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua da Selva',
        numero: '71',
        complemento: null
    }
    ]
}
function exibirTelefone(telefone1, telefone2)
{
    console.log(`Ligar para: ${telefone1}`);
    console.log(`Ligar para: ${telefone2}`);
}

exibirTelefone(estudante.telefones[0], estudante.telefones[1]); //setando o valor do índice, não é uma boa prática
exibirTelefone(...estudante.telefones); //usando o operador de espalhamento (spread)

