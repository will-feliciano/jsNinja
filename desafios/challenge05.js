/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var numbers = [1,3,5,7,9];
//[ 1, 3, 5, 7, 9 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function func(arr){
    return arr;
}
//[ 1, 3, 5, 7, 9 ]

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
func(numbers)[1];
//3


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function position(arr, ind){
    return arr[ind];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var numbs = [0, 2, 4, 6, 8];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(position(numbs, 0));
//0
console.log(position(numbs, 1));
//2
console.log(position(numbs, 2));
//4
console.log(position(numbs, 3));
//6
console.log(position(numbs, 4));
//8

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name){
    var obj = { 'Sítio do picapau amarelo': { qtdePages: 50, autor: 'Monteiro Lobato', editora: 'Globo'},
                'Codelgniter': { qtdePages: 30, autor: undefined, editora: 'Novatec'},
                'Turma da Monica': { qtdePages: 150, autor: 'Maurício de Souza', editora: 'Abril'}
    }
    
    return !name ? obj : obj[name] ;    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*{ 'SítioDoPicapauAmarelo': { qtdePages: 50, autor: 'Monteiro Lobato', editora: 'Globo' },
Codelgniter: { qtdePages: 30, autor: undefined, editora: 'Novatec' },
TurmaDaMonica: { qtdePages: 150, autor: 'Maurício de Souza', editora: 'Abril' } }*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Codelgniter tem "+ book('Codelgniter').qtdePages+" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nameBook = 'Turma da Monica';
console.log("O autor do livro "+nameBook+" é "+book(nameBook).autor+".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nameBook = 'Sítio do picapau amarelo';
console.log("O livro "+nameBook+" foi publicado pela editora "+book(nameBook).editora+".");



