//acessando-objeto

const estudante = {
    nome: 'José Silva' ,
    idade: 32,
    cpf: '1233456789',
    turma: 'JavaScript'
};

estudante.nome //josé 

function exibeInfoEstudante (objetoEstudante, propriedade){
    return objetoEstudante[propriedade]
};

console.log(exibeInfoEstudante(estudante,'nome'));
console.log(exibeInfoEstudante(estudante,'idade'));


console.log(estudante.pet); //undefined.atributo não existe
