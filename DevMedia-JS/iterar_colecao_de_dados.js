//Iterando coleção de dados
//A seguir temos uma coleção de dados que representa nomes de alunos:

let alunos = ["Carlos", "Pablo", "Juliana", "Ingrid"];
/*

Preencha as lacunas a seguir para que a coleção "alunos" seja percorrida com a estrutura de repetição for.

Considere os itens abaixo:

- Crie a variável "total_alunos" que deve ter o total de alunos que estão no array;
- Crie a variável "contador" no loop;
- Utilize a variável "total_alunos" na condição do loop;
- A cada iteração imprima o nome do aluno.

*/

let total_alunos = alunos.length;

for (contador = 0; contador < total_alunos; contador++) {

    console.log(alunos[contador]);

}