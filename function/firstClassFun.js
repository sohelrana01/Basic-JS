{
    function add(a, b){
        return a+b;
    }
    
    let sum = add;
    console.log(sum(2,3));
}

function average(a, b, fn){
    return fn(a, b) / 2;
}

console.log(average(2, 3, add));

function add(a,b){
    return a + b;
}

function compareBy(propertyName){
    return function (a, b){
        let x = a[propertyName];
        let y = b[propertyName];

        if(x > y){
            return 1;
        }else if(x < y){
            return -1;
        }
        return 0
    }
}
let products = [
    {name: 'Samsung', price: 7000 },
    {name: 'iPhone', price: 9000},
    {name: 'Sony', price: 6700}
];

console.log('Product sorted by price:');
products.sort(compareBy('name'))
console.table(products);

// Cm to In conveter
function cmToIn(length){
    return length / 2.54;
}

function inToCm(length){
    return length * 2.54;
}
function convert(fn, length){
    return fn(length)
}

let inches = convert(cmToIn, 10);
let cm = convert(inToCm, 10);

console.log(inches);
console.log(cm);