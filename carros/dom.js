(function(win, doc){

    'use-strict';

    function DOM(objs){
        if(!(this instanceof DOM)){
            return new DOM(objs);
        }

        this.element = doc.querySelectorAll(objs);
        if(this.objs.lenght === 1){
            return this.get();
        }                
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


    DOM.prototype.get = function get(index) {
        if(!index){
            return this.element[0];
        }
        return this.element[index];
    };


    DOM.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    };


   
    DOM.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    DOM.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    DOM.isFunction = function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    }

    DOM.isNumber = function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    }

    DOM.isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }

    DOM.isBoolean = function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    }

    DOM.isNull = function isNull(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]'
        || Object.prototype.toString.call(obj) === '[object Undefined]';
    }

    

    win.DOM = DOM;

})(window, document);