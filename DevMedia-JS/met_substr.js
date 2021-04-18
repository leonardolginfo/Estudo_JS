/*
Método substr
Com ajuda do método substr imprima os seguintes termos da string "nomes":

1º termo - Mateus
2º termo - Lúcia

OBS.: Não pode haver espaços em branco nem antes e nem depois de cada termo extraído da string.
*/
let nomes = "Mateus Ana Lúcia Otávio";
console.log("1 º termo - " + nomes.substr(0, 6).trim());
console.log("2 º termo - " + nomes.substr(11, 5).trim());