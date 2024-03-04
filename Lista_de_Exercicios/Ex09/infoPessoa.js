//Ex:03

const pessoa = [
    {nome: 'João', idade:22, cidade:'Caraguatatuba'},
    {nome: 'Ferdinando', idade:32, cidade:'Ubatuba'},
    {nome: 'Caio', idade:12, cidade:'São José'}
];

pessoa.push({nome:'Gilson',idade:55, cidade:'Uberlândia'});

console.log(mostrarListaPessoas());


function mostrarListaPessoas(){
    //console.log(pessoa);
    pessoa.forEach(pessoa => {
      console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
  }

function filtrarPorCidade(pessoas,cidade)
{
   return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

const cidadePessoa = filtrarPorCidade(pessoa,'Ubatuba');

console.log(cidadePessoa);
