// let person = {'name' : 'John'}

// console.log(Object.prototype);

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     return "Hi, I'm " + this.name + "!";
// }

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

let p1 = new Person('John', 'Doe')
let p2 = new Person('Sohel', 'Rana')
console.log(p1.getFullName());
console.log(p2.getFullName());