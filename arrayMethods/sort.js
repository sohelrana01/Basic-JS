// let numbers = [0, 2, 5, 3, 10];
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// String sorting
// let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
// animals.sort((a, b) => {
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0
// });
// console.log(animals);

// let mixCaseAnimals = ['Cat', 'dog', 'Elephant', 'bee', 'Ant'];
// mixCaseAnimals.sort(function(a, b){
//     let x = a.toUpperCase(),
//         y = b.toUpperCase();
    
//     return x === y ? 0 : x > y ? 1 : -1;
// })
// console.log(mixCaseAnimals);

// localeCompare
// let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
// animaux.sort(function (a, b) {
//   return a.localeCompare(b);
// });
// console.log(animaux);

// sorting an array of objects
let employess = [
    {name: 'Sohel', salary: 90000, hireDate: 'July 1, 2010'},
    {name: 'John', salary: 75000, hireDate: 'August 15, 2009'},
    {name: 'Dadid', salary: 80000, hireDate: 'December 12, 2011'}
]

// employess.sort((a, b)=>{
//     return a.salary - b.salary;
// })

employess.sort((a, b)=>{
    let x = new Date(a.hireDate),
        y = new Date(b.hireDate)
    return x - y;
})
// console.log(employess);

// Rivers length sorted
let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

let lengths = rivers.map(function(e, i){
    return {index: i, value: e.length}
})

lengths.sort(function(a, b){
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});

let sortedRivers = lengths.map(function(e){
    return rivers[e.index]
})
console.log(sortedRivers);