(function(win, doc){

    'use-strict';

    function DOM(objs){
        this.element = doc.querySelectorAll(objs);      
    }

    DOM.prototype.on = function on(evtType, func) {
        Array.prototype.forEach.call(this.element, function(element){
            element.addEventListener(evtType, func, false);
        });          
    };

    DOM.prototype.off = function off(evtType, func) {
        Array.prototype.forEach.call(this.element, function(element){
            element.removeEventListener(evtType, func, false);
        });
    };


    DOM.prototype.get = function get() {
        return this.element;
    };


    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    };


   
    DOM.prototype.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    DOM.prototype.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    DOM.prototype.isFunction = function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    }

    DOM.prototype.isNumber = function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    }

    DOM.prototype.isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }

    DOM.prototype.isBoolean = function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    }

    DOM.prototype.isNull = function isNull(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]'
        || Object.prototype.toString.call(obj) === '[object Undefined]';
    }

    /*
    var $a = new DOM('[data-js="link"]');
    $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
    });

    console.log('Elementos selecionados:', $a.get());
    //console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
    */

    win.DOM = DOM;

})(window, document);