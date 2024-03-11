const produtos = {
    id: 2332,
    nome: 'cropet',
    preco: 78.99
};

console.log('formato OBJETO >>>>>>>');
console.log(produtos);

//Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultant
const produtosString = JSON.stringify(produtos);


console.log('formato String >>>>>>>');

console.log(produtosString);