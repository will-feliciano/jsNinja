// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somaNuns(var1, var2){
... return var1+var2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
newvar = somaNuns(2,3)+5;
10

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var nova2;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function soma(var1, var2){
... return 'O valor da variável agora é '+ (var1+var2);
}

// Invoque a função criada acima.
soma(2,2);

// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável agora é 4*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function valores(a, b, c){
... if( a === undefined || b === undefined || c === undefined ){
..... return 'Preencha todos os valores corretamente!';
..... }else{
..... return (a*b*c)+2;
..... }
... }

// Invoque a função criada acima, passando só dois números como argumento.
valores(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado)
//'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
valores(1,2,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 4

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argsNew(v1, v2, v3){
... if( v1 !== undefined && v2 === undefined && v3 === undefined){
..... return v1;
..... }else if(v1 !== undefined && v2 !== undefined && v3 === undefined){
..... return v1+v2;
..... }else if(v1 !== undefined && v2 !== undefined && v3 !== undefined){
..... return (v1+v2)/v3;
..... }else if(v1 === undefined && v2 === undefined && v3 === undefined){
..... return false;
..... }else {
..... return null;
..... }
... }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
> argsNew(2,2,2);
2
> argsNew(2);
2
> argsNew(2,2);
4
> argsNew();
false








