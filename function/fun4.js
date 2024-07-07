function addAll(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return(sum);
}
let a = addAll(1,2,3,4,5)
let b = addAll(1,2,3,4,5,6,7,8,9,10)

// console.log(a, b);

function person(name, email){
    return{
        name: name,
        email: email
    }
}
let p1 = person('Sohel Rana', 'Sohel@gmail.com')
console.log(p1);