let marks = [4, 5, 7, 9, 10, 3];

// let lessThanFive = false;
// for(let i = 0; i < marks.length; i++){
//     if(marks[i] < 5){
//         lessThanFive = true;
//         break;
//     }
// }
// console.log(lessThanFive);
// let lessThanFive = marks.some(function(e){
//     console.log(e);
//     return e < 5;
// });
// console.log(lessThanFive);

function exists(value, array){
    return array.some(e => e === value);
}

console.log(exists(4, marks));
console.log(exists(12, marks));
