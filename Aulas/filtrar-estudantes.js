const estudantes = require("./estudantes.json");

function filtrarEstudantes(lista, parametro){
    return lista.filter((estudante => {
        return !estudante.endereco.hasOwnProperty(parametro);  //filtra os estudantes que não possuem a proprierada
    }));
}

const ListaEstudantesFiltrados = filtrarEstudantes(estudantes,'cep');

console.log(ListaEstudantesFiltrados);