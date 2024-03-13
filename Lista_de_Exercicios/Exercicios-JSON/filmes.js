const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];


//Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

function filtrarFilmesPorAno(lista, ano) {
    return lista.find((filme) =>
        filme.anoLancamento === ano || null);
}

//Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.
console.log(filtrarFilmesPorAno(catalogoFilmes,1993));

console.log(filtrarFilmesPorAno(catalogoFilmes,2010));
