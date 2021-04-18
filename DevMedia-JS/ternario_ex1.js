/*
Conversão para operador condicional ternário
Observe a estrutura de condição no código a seguir:
*/
let idade = 18;

if (idade >= 16) {
    resultado = "Já pode votar";
} else {
    resultado = "Ainda não pode votar";
}
console.log(resultado);

resultado = idade >= 16 ? "Já pode votar" : "Ainda não pode votar";

console.log("Resultado usando ternário", resultado);