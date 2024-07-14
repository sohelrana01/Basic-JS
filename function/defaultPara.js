function say(message = 'Hi'){
    console.log(message);
}
say()
say('Hello')

// function createDiv(height = '100px', width = '200px', border = 'solid 1px red'){
//     let div = document.createElement('div');
//     div.style.height = height;
//     div.style.width = width;
//     div.style.border= border;
//     document.body.appendChild(div);
//     return div;
// }

// createDiv(undefined, undefined ,'solid 5px green')

function put(toy, toyBox = []){
    toyBox.push(toy)
    return toyBox;
}

console.log(put('Toy Car'));
console.log(put('Teddy Bear'));

function date(d = today()){
    console.log(d);
}
function today(){
    return (new Date()).toLocaleDateString('en-US');
}
date()

// Required arguments
function requiredArg(){
    throw new Error('The arguments is required');
}
function add(x = requiredArg(), y = requiredArg()){
    return x + y;
}
console.log(add(20, 30));

// return value of function as default value for a parameter
let taxRate = () => 0.1;
let getPrice = function(price, tax = price * taxRate()){
    return price + tax;
}
let fullPrice = getPrice(200);
console.log(fullPrice);