let numbers = [1, 3, 5];

// let result = true;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] <= 0){
//         result = false;
//         break;
//     }
// }

// Use every()
let result = numbers.every(function(e){
    return e >= 0
})
// console.log(result);

// Check Even | Odd numbers
let isEven = numbers.every(function(e){
    return e % 2 === 1;
});
// console.log(isEven);

let range = {
    min: 0,
    max: 10
};
let isInRange = numbers.every(function(e){
    return e >= this.min && e <= this.max;
}, range)
console.log(isInRange);