/*
Código incompleto
Abaixo temos um código que está incompleto.Preencha as lacunas vazias seguintes os itens:

    -A coleção de objetos deve se chamar "produtos"; -
A 1 ª estrutura de repetição do código deve ser a estrutura
for; -
A 2 ª estrutura de repetição do código deve ser a estrutura
for..
in;

OBS.: Todas as variáveis devem ser criadas com "let" 
    */
let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for (let contador = 0; contador < produtos.length; contador++) {


    let produto = produtos[contador];



    for (let propriedade in produto) {

        if (propriedade == "preco") {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": caraca " + produto[propriedade]);
        }

    }

    console.log("\n");
}