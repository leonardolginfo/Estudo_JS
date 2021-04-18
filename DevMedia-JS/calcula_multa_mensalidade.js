/*

Completando o código
Abaixo temos um código incompleto. Preencha as lacunas vazias de modo que sejam atendidos os seguintes itens:

Todas as variáveis devem ser criadas com "let";
A variável "dias_atraso" deve receber o valor de "contador" a cada iteração;
A variável "novo_valor_mensalidade" deve receber a soma das variáveis "valor_mensalidade" e "valor_multa";
O contador deve ser incrementado a cada iteração.

*/

let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

do {


    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");


    contador++;

} while (contador < total_dias);