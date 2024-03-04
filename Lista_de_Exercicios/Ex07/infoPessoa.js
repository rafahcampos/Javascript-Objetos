
const pessoa = {
    nome : 'José',
    idade: 67,
    solteiro: true,
    estadoCivil: function(){
        return this.solteiro ? 'Solteiro' : 'Casado'
    }
    
}


pessoa.solteiro = false;

console.log(pessoa.estadoCivil());