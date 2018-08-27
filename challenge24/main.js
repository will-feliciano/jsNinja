(function(){
    'use-strict';

    /*
    Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
    o código, conforme vimos na aula anterior. Quebrar as responsabilidades
    em funções, onde cada função faça somente uma única coisa, e faça bem feito.
    - Remova as duplicações de código;
    - agrupe os códigos que estão soltos em funções (declarações de variáveis,
    listeners de eventos, etc);
    - faça refactories para melhorar esse código, mas de forma que o mantenha com a
    mesma funcionalidade.
    */
       
    var $visor = document.querySelector('[data-lb="visor"]');
    var $btnsNumbers = document.querySelectorAll('[data-btn="numb"]');
    var $btnsOpers = document.querySelectorAll('[data-btn="op"]')
    var $btnCE = document.querySelector('[data-op="clean"]');
    var $btnCalc = document.querySelector('[data-op="calc"]');
    
    function initialize(){
        initEvents();
    }

    function initEvents(){            
        Array.prototype.forEach.call($btnsNumbers, function(button){
            button.addEventListener('click', clickValue, false);
        });

        Array.prototype.forEach.call($btnsOpers, function(button){
            button.addEventListener('click', clickOP, false);
        });
        $btnCE.addEventListener('click', clickCE, false);
        $btnCalc.addEventListener('click', clickCalc, false);
    }
    
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
        var operations = getOperations();
        var lastIt = number.split('').pop();        
        return operations.some(function(op){
            return op === lastIt;
        });       
    }

    function getOperations(){
        return Array.prototype.map.call($btnsOpers, function(button){
            return button.value;
        });
    }

    function remLastIt(string){
        if(isOperation(string)){
            return string.slice(0, -1);
        }
        return string;
    }

    function clickCalc(){
        $visor.value = remLastIt($visor.value);
        var vars = $visor.value.match(getRegexOp());
        $visor.value = vars.reduce(calculateAllValues);
    }

    function getRegexOp(){
        return new RegExp('\\d+['+ getOperations().join('') +']?','g');
    }

    function calculateAllValues(acc, act){
        var fvalue = acc.slice(0, -1);
        var operador = acc.split('').pop();
        var lvalue = remLastIt(act);
        var lop = isOperation(act)? act.split('').pop() : '' ;
        return doOperation(operador, fvalue, lvalue) + lop;  
    }

    function doOperation(operador, fvalue, lvalue){
        switch(operador){
            case '+':
                return (Number(fvalue) + Number(lvalue));
            case '-':
                return (Number(fvalue) - Number(lvalue));
            case 'x':
                return (Number(fvalue) * Number(lvalue));
            case '/':
                return (Number(fvalue) / Number(lvalue));
                                
        }
    }
   
    initialize();
})(window, document);