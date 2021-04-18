/*

Completando o código da tabuada
Abaixo temos um código que vai multiplicar o número 3 por diversos números.Complete as lacunas vazias para que o código fique 100 % correto.

OBS.: Deve - se multiplicar o número 3 por números de 0 até 10
*/
let numero = 3;
let contador = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while (contador <= 10) {

    let resultado = numero * contador;

    console.log(numero + " x " + contador + " = " + resultado);

    contador++;

}

// Tabuada de multiplicação - Nº 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30