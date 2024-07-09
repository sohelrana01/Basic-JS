// let lang = prompt('What is your favorite programming language?');

// let fedback = lang.toLowerCase() === 'JavaScript' ? `It's greet!`:`It's ${lang}`;

// alert(fedback)

let ageStr = prompt('How old are you');
let age = Number(ageStr);

let fedback = age>= 16 ? "You are eligible to join" : "You must be at least 16 year old to join";
alert(fedback)