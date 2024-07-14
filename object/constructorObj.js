// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// creating Constructor function object
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName;
    };
}

let person = new Person('john', 'Doe');
let person1 = new Person('Sohel', 'Rana');
console.log(person);
console.log(person1);
console.log(person1.getFullName());