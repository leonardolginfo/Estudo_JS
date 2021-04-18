/*
Percorrendo cursos de idiomas
Abaixo temos uma coleção de objetos onde cada objeto representa um idioma tendo os atributos "nome", "preco" e "carga_horaria".

Preencha as lacunas do código atendendo os itens abaixo:

- O nome da coleção de objetos deve ser "cursos_idiomas";
- Deve ser utilizada a estrutura for .. of para percorrer a coleção;
- Devem ser criadas as variáveis "nome_curso", "preco_curso" e "carga_horaria_curso" para representar os atributos do objeto na iteração;
- Deve ser criada a variável "preco_hora_curso" que vai receber a variável "preco_curso" sendo dividida pela variável "carga_horaria_curso";
- A estrutura condicional deve verificar se a variável "preco_hora_curso" é maior ou igual ao valor 15.

OBS.: Todas as variáveis devem ser criadas com "let"

*/
let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for (let curso of cursos_idiomas) {


    let nome_curso = curso.nome;

    let preco_curso = curso.preco;

    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso =
        preco_curso / carga_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");


    if (preco_hora_curso >= 15) {
        console.log("Hora/aula superior ou igual a R$15,00");
    } else {
        console.log("Hora/aula inferior a R$15,00");
    }

    console.log("\n");

}