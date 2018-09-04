(function(){
    'use-strict';

    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    var $visor = document.querySelector('[data-lb="visor"]');
    var $btnsNumbers = document.querySelectorAll('[data-btn="numb"]');
    var $btnsOpers = document.querySelectorAll('[data-btn="op"]')
    var $btnCE = document.querySelector('[data-op="clean"]');
    var $btnCalc = document.querySelector('[data-op="calc"]');
    
    Array.prototype.forEach.call($btnsNumbers, function(button){
        button.addEventListener('click', clickValue, false);
    });

    Array.prototype.forEach.call($btnsOpers, function(button){
        button.addEventListener('click', clickOP, false);
    });

    $btnCE.addEventListener('click', clickCE, false);
    $btnCalc.addEventListener('click', clickCalc, false);
    
    function clickValue(){
        $visor.value += this.value;
    }

    function clickOP(){
        $visor.value = remLastIt($visor.value);                    
        $visor.value += this.value;
    }

    function clickCE(){
        $visor.value = 0;
    }

    
    function isOperation(number){
        var operations = ['+','-','x','/'];
        var lastIt = number.split('').pop();
        
        return operations.some(function(op){
            return op === lastIt;
        });       

    }

    function remLastIt(number){
        if(isOperation(number)){
            return number.slice(0,-1);
        }
        return number;
    }

    function clickCalc(){
        $visor.value = remLastIt($visor.value);
        var vars = $visor.value.match(/(?:\d+)|[+x+-]/g);
        $visor.value = vars.reduce(function(acc, act){
            var fvalue = acc.slice(0, -1);
            var operador = acc.split('').pop();
            var lvalue = remLastIt(act);
            var lop = isOperation(act)? act.split('').pop() : '' ;
            switch(operador){
                case '+':
                    return Number(fvalue) + Number(lvalue) + lop;
                case '-':
                    return Number(fvalue) - Number(lvalue) + lop;
                case 'x':
                    return Number(fvalue) * Number(lvalue) + lop;
                case '/':
                    return Number(fvalue) / Number(lvalue) + lop;
                                    
            }
            //return acc + act;
        });
    }

   

})();