const biblioteca = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
  },
  {
    id: 2,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605,
  },
  { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
];

//Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.

function encontrarLivrosPorID(id) {
  return biblioteca.find(livros => 
    livros.id === id)|| null;
};

const livroEncontrado = encontrarLivrosPorID(2);
console.log(livroEncontrado);

const livroNaoEncontrado = encontrarLivrosPorID(4);
console.log(livroNaoEncontrado);
