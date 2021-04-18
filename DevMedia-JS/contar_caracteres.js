/*

Número de caracteres das cores
O código abaixo deve dizer se uma cor tem mais que 5 caracteres ou não. Complete as lacunas vazias para que o código fique completo:

*/

let cores = "verde azul branco amarelo preto";

let array_cores = cores.split(" ");

for (const cor of array_cores) {

    if (cor.length > 5) {
        console.log(" A cor " + cor + " tem mais que 5 caracteres");
    } else {
        console.log(" A cor " + cor + " não tem mais que 5 caracteres");
    }

}