const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); //Convertendo um JSON em string

//console.log(stringEstudante);
//console.log(typeof stringEstudante);  //informa o tipo 

console.log(stringEstudante.nome); //A string não tem mais propriedade agora que é string

const ObjctEstudante = JSON.parse(stringEstudante);
console.log(ObjctEstudante);
console.log(typeof ObjctEstudante);  //Agora será um objeto novamente 

console.log(ObjctEstudante.cpf); //é possivel acessar as chaves