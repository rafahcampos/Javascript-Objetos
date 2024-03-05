const estudante = {
  nome: "Kakaroto Goku",
  idade: 36,
  cpf: "78933345696",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["55443324565", "93454232334"],
  enderecos: [
    {
      rua: "Rua do Mato",
      numero: 22,
      complemento: "primeira casa depois da arvore grande",
    },
    {
      rua: "Rua do Riacho",
      numero: 34,
      complemento: null,
    },
  ],
};

function exibirTelefone(telefone1, telefone2)
{
    console.log(`Ligar para: ${telefone1}`);
    console.log(`Ligar para: ${telefone2}`);
}

//exibirTelefone(estudante.telefones[0],estudante.telefones[1]); 
exibirTelefone(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]

};

console.log(dadosEnvio);