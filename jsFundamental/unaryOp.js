let x = 10;
let y = +x;

// console.log(y);

let f = false;
let t = true;

// console.log(+f); // 0
// console.log(+t); // 1

let person = {
    name: 'John',
    toString: function(){
        return '25';
    },
    valueOf: function(){
        return '30';
    }
};

// console.log(+person);

let age = 25;
++age;
// console.log(age);

let width = 90;
width = ++width + 5;
// console.log(width);

let width2 = 90;
let netWidth = width2++ + 5;
console.log(netWidth);
console.log(width2);

let height = 90;
height = --height + 5;
// console.log(height);

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

