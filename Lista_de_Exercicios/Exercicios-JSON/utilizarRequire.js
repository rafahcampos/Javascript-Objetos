const dadosJson = require('./dados.json');

//Imprima no console o conteúdo importado utilizando a função console.log().

console.log(dadosJson);

//Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.

console.log('Produtos: >>>');
console.log(dadosJson.produtos);


console.log('Nome dos Usuarios: >>>');
console.log(dadosJson.usuarios);