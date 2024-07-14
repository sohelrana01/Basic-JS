// function recurse(){
//     recurse();
// }

// function recurse(){
//     if(condition){
//         //........
//     }else{
//         recurse();
//     }
// }
function countDown(fromNumber){
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;

    if(nextNumber > 0){
        countDown(nextNumber);
    }
}
countDown(3)

// Recursive sum of n numbers
function sum(n){
    if(n <= 1){
        return n;
    }
    return n + sum(n -1);
}

console.log(sum(3));