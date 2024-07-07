// array.includes(element, fromIndex);

console.log([1,2,3].includes(2));
console.log([NaN].includes(NaN));

console.log([-0].includes(+0));

let bmw = {name: 'bmw'},
    toyota = {name: 'toyota'},
    ford = {name: 'ford'}

let cars = [ford, toyota];
console.log(cars.includes(bmw));
console.log(cars.includes(ford));