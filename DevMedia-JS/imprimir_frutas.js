/*
Imprimindo frutas
Observe o código abaixo:
*/

let frutas = "ameixa,maçã,banana,abacaxi,laranja";
let array_frutas = frutas.split(",");
for (let fruta of array_frutas) {
    console.log("Fruta: " + fruta);
}