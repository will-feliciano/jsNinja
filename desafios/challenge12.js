(function(){

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {name: 'William', lastname: 'Feliciano', age: 28};

    console.log('Propriedades de "person":');
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */   
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name: 'Sítio', pages: 10});
    books.push({name: 'Fazenda', pages: 20});

    console.log( '\nLista de livros:');
    /*
    Mostre no console todos os livros.
    */
    console.log(books);
    
    console.log( '\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop());

    console.log( '\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var stringBooks = JSON.stringify(books);
    console.log( '\nLivros em formato string:');

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(stringBooks);

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    var objBooks = JSON.parse(stringBooks);
    console.log( '\nAgora os livros são objetos novamente:');

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
   
    for(var c = 0; c < books.length; c++){
        for(var obj in books[c] ){
            console.log(obj +':'+ books[c][obj]);
        }
    }
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['w','i','l','l','i','a','m'];

    console.log( '\nMeu nome é: ');
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é: ');
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''));

    console.log( '\nAgora em ordem alfabética: ');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());

})();
