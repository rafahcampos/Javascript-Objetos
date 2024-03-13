const departamentos = [
  {
    id: 1,
    nome: "Vendas",
    funcionarios: [
      { id: 101, nome: "Ana", cargo: "Vendedor" },
      { id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
    ],
  },
  {
    id: 2,
    nome: "TI",
    funcionarios: [
      { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
      { id: 202, nome: "João", cargo: "Analista de sistemas" },
    ],
  },
];

// Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.

function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
    const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
    if (funcionarioEncontrado) {
      return funcionarioEncontrado;
    }
  }
  return null;
}



// Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.

const funcionarioEncontrado1 = encontrarFuncionarioPorId(2);
console.log(funcionarioEncontrado1);

const funcionarioEncontrado2 = encontrarFuncionarioPorId(202);
console.log(funcionarioEncontrado2);