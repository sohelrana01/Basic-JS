// (
//     function(){
//         console.log(34552);
//     }
// )()

// function add(a, b){
//     return a + b
// }
// console.log(add);

{
    let sum = function(a, b){
        return a + b;
    }
    console.log(sum(3, 5));
}
{
    let sum = (function(a, b){
        return a + b;
    })(5,7)
    console.log(sum);
}

{
    (function(){
        let counter = 0;
        function add(a, b){
            return a + b;
        }
        console.log(add(3,4));
    })()
}
