let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function(){
        console.log('Hi');
    },
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

// person.greet = function(){
//     console.log('Hello');
// }
person.greet()
console.log(person.getFullName());