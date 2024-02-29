//Exercício 3

const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'As duas Torres',
    autor: 'Tolkien',
    anoPublicacao: '1954',
    genero: 'fantasia',
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(`O livro ${livro["titulo"]} do autor ${livro["autor"]}, do genero de ${livro["genero"]} foi publicado no ano de ${livro["anoPublicacao"]}, já tendo ${livro["idadePublicacao"]} anos desta sua primeira publicação. `);