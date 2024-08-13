const calculator = (function(){
    function add(a,b){
        return a+b;
    }
    function multiply(a,b){
        a*b;
    }
    return{
        add: add,
        multiply: multiply
    }
})();