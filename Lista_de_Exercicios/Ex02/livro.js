//Ex02;

const anoAtual = new Date().getFullYear(); //intanciando um objeto do tipo date();

const livro = {
    titulo: 'O senhor dos anéis',
    autor: "Tolkien",
    anoPublicacao: "1954",
    genero: "Fantasia"
};

livro.idadePublicacao = anoAtual-livro.anoPublicacao;

console.log(
    `O titulo do livro é ${livro.titulo}, 
    O autor é o ${livro.autor}, contendo o gênero de ${livro.genero}.,
    Foi publicado no ano de ${livro.anoPublicacao},
    tendo atualmente ${livro.idadePublicacao} anos`
);
