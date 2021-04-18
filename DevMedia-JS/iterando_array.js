/*
Iterando os atributos de um aluno
Complete o código abaixo utilizando a estrutura de repetição for .. in para percorrer os atributos do objeto aluno. Todos os atributos do objeto devem ser impressos.

OBS.: O nome da variável criada no loop deve ser "dados"

*/

let aluno = {
    nome: "Marcos",
    email: "marcos@email.com",
    idade: 25
};

for (let dados in aluno) {
    console.log(aluno[dados]);
}