///////// Closure Examples
{
    function outer(){
        var x = 10;
        function inner(){
            console.log(x);
        }

        x = 20;
        return inner;
    }
    var innerFun = outer();
    innerFun()
}
{
    function outer(){
        var x = 10;
        function inner(){
            var y = 5;
            console.log(x + y);
        }
        var x = 20;
        return inner;
    }
    var innerFun = outer();
    innerFun()
}
{
    (function outer(x){
        return (function innder(y){
            console.log(x);
        })(105);
    })(100)
}
{
    let count = 0;
    (function logCount(){
        if(count === 0){
            let count = 1;
            console.log(count);
        }
        console.log(count);
    })()
}
{
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000)
    }
}
{
    for(let i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000)
    }
}

{
    for(var i = 0; i < 5; i++){
        (function(j){
            setTimeout(function(){
                console.log(j);
            },1000);
        })(i);
    }
}