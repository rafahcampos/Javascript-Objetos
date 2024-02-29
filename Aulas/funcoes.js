//Funções

const estudante = {
  nome: "José",
  idade: 32,
  cpf: "233342354234",
  turma: "Java",
  bolsista: true,
  telefone: ["234342234", "23435432"],
  media: 7.5,
  estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false   //Operador Ternário
  //estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false Arrow Function não da para usar quando tem contexto, como o 'this', precisa umsar a função da forma normal
  }
};

console.log(estudante.estaAprovado(5));
