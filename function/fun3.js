// function test(){
//     // console.log(arguments.length);
//     for(let i = 0; i <arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// test(3, 4, 5)

function addAll(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum);
}
addAll(1,2,3)
addAll(1,2,3,4,5)
addAll(1,2,3,4,5,6,7,8,9,10)
