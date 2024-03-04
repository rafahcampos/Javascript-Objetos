//Ex: 02

const pessoa = {
    nome:'João',
    idade: 54,
    endereco:{
        rua: 'Miguel Penteadura n.78',
        cidade: 'Sorocaba',
        estado: 'SP'
    }
};


function mostrarInfoPessoa(){
    console.log(`
    nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome}), 
    idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade}),
    rua: ${pessoa.endereco.rua} (Tipo: ${typeof pessoa.endereco.rua}), 
    cidade: ${pessoa.endereco.cidade} (Tipo: ${typeof pessoa.endereco.cidade}), 
    estado: ${pessoa.endereco.estado} (Tipo: ${typeof pessoa.endereco.estado})`
    );
}

mostrarInfoPessoa();