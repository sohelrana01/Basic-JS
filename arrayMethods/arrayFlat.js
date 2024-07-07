////// Let newArray = arrayObject.flat([depth])  - Defaults deep 1

const numbers = [1, 2, 3, [7, 8, 9]]
const numbers2 = [1, 2, 3, [7, 8, 9, [4,5,6]]]
const numbers3 = [1, 2, 3, [7, 8, 9, [4,5,6, [12,13,14,[15,17,18]]]]]
const flatNumbers = numbers.flat()
const flatNumbers2 = numbers2.flat(2)
const flatNumbers3 = numbers3.flat(Infinity)
// console.log(flatNumbers);
// console.log(flatNumbers2);
// console.log(flatNumbers3);

const names = ['Sohel', , 'Rana', , 'John', , 'Doe',] // Flat Remove Empty slots
const flatNames = names.flat()
console.log(flatNames);