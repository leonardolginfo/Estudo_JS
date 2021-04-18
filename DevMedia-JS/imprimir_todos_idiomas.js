//Imprimindo idiomas
//Complete o código abaixo de forma que todos os idiomas sejam 
//impressos:

let idiomas = "português,inglês,francês,espanhol";

let array_idiomas = idiomas.split(",");

for (const idioma of array_idiomas) {

    console.log("Idioma: " + idioma);
}