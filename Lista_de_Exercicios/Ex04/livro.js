const livro = {
  titulo: "O Retorno do Rei",
  autor: "Tolkien",
  anoDePublicacao: 1954,
  genero: "Fantasia",
  idadeDePublicacao: 70,
};

livro.avaliacao = null;

console.log(livro); 

if(livro.avaliacao){
  console.log('Este livro já possui uma avaliação');
}else{
  livro.avaliacao = 'A o livro ganhou uma avaliação positiva';
}


console.log(livro); 
