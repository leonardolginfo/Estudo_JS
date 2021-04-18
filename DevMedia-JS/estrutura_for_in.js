/*

Estrutura de repetição for .. in
Complete o código abaixo para que os dados sobre o aluno sejam impressos. Considere os itens a seguir:

- Para percorrer o objeto "aluno" deve ser utilizada a estrutura for .. in;
- A variável criada no loop deve se chamar "dados" e deve ser criada com "let";
- A cada iteração deve ser exibido o valor de um atributo diferente do objeto aluno.

*/

let aluno = {
    nome: "Marcos",
    email: "marcos@email.com",
    idade: 25
};

for (let dados in aluno) {

    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25