// Declare a function
function funcionName(parameters){
    console.log(`This is a function`);
}
funcionName();

function say(message){
    console.log(message);
}
let result = say('Hello');
console.log('Result:', result);

function add(a, b){
    return a+b;
}
let sum = add(4,5);
console.log('Sum: ', sum);

function compare(a, b){
    if(a > b){
        return -1;
    }else if(a < b){
        return 1;
    }
    return 0;
}
let compareResult = compare(-1, 1)
console.log(compareResult);


console.log(addOf(1,2,3,4));
console.log(addOf(1,2,3,4,5,6,7,8,9));

function addOf(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

