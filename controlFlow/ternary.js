{
    let age = 18;
    let message;

    if(age >= 16){
        console.log('You can get driving licence');
    }else{
        console.log('Can not drive');
    }
}
let age = 15;
let message;
age >= 16 ? (message = 'You can get driving licence') : (message = 'Can not drive');
console.log(message);

// ternry operator to perform multiple statement
let authenticated = true;
let nextUrl = authenticated 
    ? (console.log('You will be redirect to admin area'), '/admin')
    : (console.log('Acess denied'), '/403');
console.log(nextUrl);

let speed = 90;
let driverSpeed = speed >= 120 ? 'So fast' : speed >= 80 ? 'Fast' : 'Ok';
console.log(driverSpeed);
