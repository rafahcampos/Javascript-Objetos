//5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:id (number): identificador da pessoa.nome (string): nome da pessoa. - idade (number): idade da pessoa

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}


//Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

function copiaPessoa (pessoa){
    const copia = JSON.parse(JSON.stringify(pessoa)); //copia o objeto e não a referência
    return copia;
}

//Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

const pessoaNova = copiaPessoa(pessoaOriginal);

pessoaNova.nome = "Roberto";

console.log("Pessoa original: ");
console.log(pessoaOriginal);
console.log("Pessoa Nova: ");
console.log(pessoaNova);