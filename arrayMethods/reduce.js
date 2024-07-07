let numbers = [1, 2, 3]

let sum = numbers.reduce(function(previousValue, currentValue){
    console.log({previousValue, currentValue});
    return previousValue + currentValue;
})
// console.log(sum);

// let sum = numbers.reduce((pv, cv)=>{
//     return pv + cv;
// })

let shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 500
    },
    {
        product: 'Screen Protector',
        qty: 3,
        price: 10
    },
    {
        product: 'Memory Card',
        qty: 3,
        price: 20
    }
]
let total = shoppingCart.reduce(function(previousValue, currentValue){
    return previousValue + currentValue.qty * currentValue.price;
}, 0)
console.log(total);


