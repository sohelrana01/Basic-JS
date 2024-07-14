// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName(){
//         return this.firstName + ' '+ this.lastName;
//     }
// }
// console.log(person.getFullName());

// Define a function that create the person object:

function createPerson(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName(){
            return this.firstName + ' ' + this.lastName;
        }
    }
}
let person1 = createPerson('Sohel', 'Rana')
let person2 = createPerson('John', 'Doe')

// console.log(person1.getFullName());
// console.log(person2.getFullName());

{
    function createPerson(firstName, lastName) {
        return {
            firstName: firstName,
            lastName: lastName
        }
    }
    var personActions = {
        getFullName() {
          return this.firstName + ' ' + this.lastName;
        },
    };

    let person1 = createPerson('John', 'Doe');
    let person2 = createPerson('Jane', 'Doe');
    
    person1.getFullName = personActions.getFullName;
    person2.getFullName = personActions.getFullName;
    
    // console.log(person1.getFullName());
    // console.log(person2.getFullName());
}

{
    let personAction = {
        getFullName(){
            return this.firstName + ' ' + this.lastName;
        }
    }
    function createPerson(firstName, lastName){
        let person = Object.create(personAction);
        person.firstName = firstName;
        person.lastName = lastName;
        return person;
    }

    let person1 = createPerson('John', 'Doe')
    let person2 = createPerson('Sohel', 'Rana')
    console.log(person1.getFullName());
    console.log(person2.getFullName());
}