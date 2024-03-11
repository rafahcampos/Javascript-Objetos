//import estudante from './estudante.json'; //outra forma de importar

const estudante = require("./estudante.json"); //convertendo um json em um objeto javaScript

//console.log(estudante);
//console.log(typeof estudante);

const chaves = Object.keys(estudante);  //guarda as chaves em uma constante
console.log(chaves);