let addition = function(a, b){
    return a+b
}

console.log(addition(3, 6));

let anotherfun = addition

console.log(anotherfun(5,7));

setTimeout(() => {
    console.log('Function is Called');
}, 2000);