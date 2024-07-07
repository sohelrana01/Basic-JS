let odds = [1, 3, 5];
let evens = [2, 4, 6];

// let combined = odds.concat(evens)
let combined = [].concat(odds, evens)
console.log(combined);

let rgb = ['red', 'green', 'blue'];
let moreColors = rgb.concat('yellow', 'tomato')
console.log(rgb);
console.log(moreColors);

// ES6 use spreed operator
let num1 = [2, 3, 5];
let num2 = [6, 7, 9];
let addNum = [...num1, ...num2]
console.log(addNum);