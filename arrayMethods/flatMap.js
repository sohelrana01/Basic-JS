// let sentences = ['JavaScript Array flatMap()', ' ', 'is', ' ', 'Awesome'];
// let words = sentences.map(s => s.split(' '));
// console.log(words);

// let words2 =sentences.flatMap(s => s.split(' '))
// console.log(words2);

/////// Adding And Removeing elements
let cart = [
    {
        name: 'SmartPhone',
        qty: 2,
        price: 500,
        freeOfCharge: false
    },
    {
        name: 'Table',
        qty: 1,
        price: 800,
        freeOfCharge: false
    }
]
//If customers buy a smartphone, you want to give them a free screen protector.

let newCart = cart.flatMap((item)=>{
    if(item.name === 'SmartPhone'){
        return[item, {
            name: 'Screen Protector',
            qty: item.qty,
            price: 5,
            freeOfCharge: true
        }]
    } else {
        return [item]
    }
})

console.log(newCart);

const total= newCart.reduce((sum, item) =>{
    if(!item.freeOfCharge){
        sum += item.price * item.qty;
    }
    return sum
}, 0);
console.log(total);
