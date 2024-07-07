// function arrayFromArgs(){
//     let result = [];
//     for(let i = 0; i < arguments.length; i++){
//         result.push(arguments[i])
//     }
//     return result;
// }

// Use slice methods
// function arrayFromArgs(){
//     return Array.prototype.slice.call(arguments)
// }
// let fruits = arrayFromArgs('banana', 'apple', 'orange', 'mango');


// Use Array from()
function arrayFromArgs(){
    return Array.from(arguments)
}

let fruits = arrayFromArgs('banana', undefined, 39, NaN);
// console.log(fruits);

function addOne(){
    return Array.from(arguments, x => x * 2);
}
// console.log(addOne(3, 4, 5));

// create array from iterator object
let even = {
    *[Symbol.iterator](){
        for(let i = 0; i < 10; i += 2){
            yield i;
        }
    }
}
let evenNumbers = Array.from(even)
console.log(evenNumbers);