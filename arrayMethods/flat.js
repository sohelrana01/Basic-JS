// newArray = arrayObject.flat([depth])

const numbers = [1, 2, 3, [5, 6, 7]];
const flatNumber = numbers.flat();
// console.log(flatNumber);

const numbers2 = [1, 2, [4, 5, [7, 9]]]
const numbers3 = [1, 2, [4, 5], [7, 8]]

// console.log(numbers3.flat(2));

// Infinity depth level

const numbers4 = [1,[2,[3,[4,[5,[6,[7,[8,[9]]]]]]]]]
console.log(numbers4.flat(Infinity));

// remove empty slots
const numbers5 = [1, 2, , 4, , 5];
const sequence = numbers5.flat();

console.log(sequence);