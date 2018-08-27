(function(){
    'use-strict';
    

    function exect(obj, evt, func, boo){
        document.querySelector(obj)
        .addEventListener(evt, func, boo);
    }

    
    exect('[data-btn="btn"]', 'click', function(event){
        event.preventDefault();
        alert('test');
    }, false);
    

})();
