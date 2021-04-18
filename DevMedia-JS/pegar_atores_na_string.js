/*

Atores
O código abaixo deve imprimir apenas o nome de cada ator que está dentro da string "atores". Com a ajuda do método split(), complete o código abaixo para que ele funcione da forma esperada.

*/

let atores = "Will Smith;Brad Pitt;Adam Sandler;Tom Cruise";

let array_atores = atores.split(";");

for (const ator of array_atores) {
    console.log(ator);
}