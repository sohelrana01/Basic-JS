// (function (){
//     // Anonymous function
// })

let show = function(){
    console.log('Anonymous Function');
}
show()

setTimeout(function(){
    console.log('Execute later after 1 second');
}, 1000);

// Immediately invoked function execution
(function(){
    console.log('Immediately invoked function');
})();

// Passing arguments in anonymous function
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
(function(){
    console.log(person.firstName + ' ' + person.lastName);
})(person)

// Arrow function
let hello = function(){
    console.log('Anonymous function');
}
hello();
let hello2 = () => console.log('Anonymous function 2');
hello2()