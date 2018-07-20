// Crie uma fun��o que receba dois argumentos e retorne a soma dos mesmos.
function somaNuns(var1, var2){
... return var1+var2;
}

// Declare uma vari�vel que receba a invoca��o da fun��o criada acima, passando dois n�meros quaisquer por argumento, e somando `5` ao resultado retornado da fun��o.
newvar = somaNuns(2,3)+5;
10

// Qual o valor atualizado dessa vari�vel?
10

// Declare uma nova vari�vel, sem valor.
var nova2;

/*
Crie uma fun��o que adicione um valor � vari�vel criada acima, e retorne a string:
    O valor da vari�vel agora � VALOR.
Onde VALOR � o novo valor da vari�vel.
*/
function soma(var1, var2){
... return 'O valor da vari�vel agora � '+ (var1+var2);
}

// Invoque a fun��o criada acima.
soma(2,2);

// Qual o retorno da fun��o? (Use coment�rios de bloco).
/*O valor da vari�vel agora � 4*/

/*
Crie uma fun��o com as seguintes caracter�sticas:
1. A fun��o deve receber 3 argumentos;
2. Se qualquer um dos tr�s argumentos n�o estiverem preenchidos, a fun��o deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da fun��o deve ser a multiplica��o dos 3 argumentos, somando `2` ao resultado da multiplica��o.
*/
function valores(a, b, c){
... if( a === undefined || b === undefined || c === undefined ){
..... return 'Preencha todos os valores corretamente!';
..... }else{
..... return (a*b*c)+2;
..... }
... }

// Invoque a fun��o criada acima, passando s� dois n�meros como argumento.
valores(1,2);

// Qual o resultado da invoca��o acima? (Use coment�rios para mostrar o valor retornado)
//'Preencha todos os valores corretamente!'

// Agora invoque novamente a fun��o criada acima, mas passando todos os tr�s argumentos necess�rios.
valores(1,2,1);

// Qual o resultado da invoca��o acima? (Use coment�rios para mostrar o valor retornado).
// 4

/*
Crie uma fun��o com as seguintes caracter�sticas:
1. A fun��o deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condi��es acima forem atendidas, retorne `null`.
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

// Invoque a fun��o acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com tr�s.) Coloque um coment�rio de linha ao lado da fun��o com o resultado de cada invoca��o.
> argsNew(2,2,2);
2
> argsNew(2);
2
> argsNew(2,2);
4
> argsNew();
false








