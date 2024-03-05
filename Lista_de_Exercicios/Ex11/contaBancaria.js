//Ex:05

const contaBancaria = {
    titular: 'Juca Castro',
    saldo: 1000,
    depositar:function(vlrDepositado){
        return this.saldo += vlrDepositado;
    },
    sacar:function(vlrASacar){
        if(this.saldo > vlrASacar){
            return this.saldo = this.saldo - vlrASacar; 
        }else{
            console.log('Saldo insulficiente!!!');
        }
    }

};

const cliente = {
    nome: 'Geovana Cogumelo',
    conta: contaBancaria,
};

function mostrarSaldo(client){
    console.log(`Nome: ${client.nome}, Saldo:${client.conta.saldo}`);
;}



contaBancaria.depositar(2000);
mostrarSaldo(cliente);
contaBancaria.sacar(2990);
mostrarSaldo(cliente);
contaBancaria.sacar(20);
mostrarSaldo(cliente);



