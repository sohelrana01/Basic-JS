let cities =[
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// let bigCities = [];
{
    // for(let i = 0; i < cities.length; i++){
    //     if(cities[i].population > 3000000){
    //         bigCities.push(cities[i]);
    //     }
    // }
}
// use filter

// let bigCities = cities.filter((e)=>{
//     return e.population > 3000000;
// });

cities.filter(city => city.population < 3000000)
      .toSorted((a, b) => a.population - b.population)
      .map(city => console.log(`${city.name} : ${city.population}`))

// this
function isInRange(value){
    if(typeof value !== 'number'){
        return false;
    }
    return value >= this.lower && value <= this.upper;
}
let data = [10, 20, '30', 1, 5, 'JS', undefined, 'filter'];

let range = {
    lower: 1,
    upper: 10
}
let numberInRange = data.filter(isInRange, range)
console.log(numberInRange);
