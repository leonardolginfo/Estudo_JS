/*
Resumo de conteúdo
O código abaixo verifica se um conteúdo tem mais de 100 caracteres. Caso tenha, a variável "resumo" vai receber os caracteres contidos entre as posições 0 e 97 da variável "conteudo". Caso contrário a variável "resumo" simplesmente recebe o valor de "conteudo".

Para que o código funcione da forma descrita acima, preencha as lacunas incompletas abaixo.
*/
let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";
console.log(tamanho);
if (tamanho > 100) {

    resumo = conteudo.substr(0, 97);
    resumo += "...";
    console.log(resumo);

} else {

    resumo = conteudo;
    console.log(resumo);

}