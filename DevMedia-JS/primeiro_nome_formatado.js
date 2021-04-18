/*
Primeiro nome maiúsculo
O objetivo do código abaixo é imprimir o primeiro nome da string com letras maiúsculas:
*/

let nome = "Thais Souza Freitas";

let array = nome.split(" ");
console.log(array);

let primeiro_nome = array[0];

let primeiro_nome_formatado = primeiro_nome.toUpperCase();

console.log(primeiro_nome_formatado);

/*
Porém, quando o código é executado o resultado não é o esperado.Marque a alternativa que identifica o que impediu que apenas o primeiro nome da string fosse impresso com letras maiúsculas.
*/