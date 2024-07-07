// unshift - adds one or more elements to the beginning

let numbers = [10, 20, 30, 40]
let number;
while((number = numbers.shift()) != undefined){
    console.log(number);
}
// let length = numbers.unshift(10,20);
// let shiftValue = numbers.shift()

// console.log(numbers.length);
console.log(numbers);

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];
// for(const weekend of weekends){
//     days.unshift(weekend);
// }
days.unshift(...weekends)
console.log(days);