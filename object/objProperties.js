// A data properties has four attributes:
    // -Configurarable 
    // - Enumerable
    // - Writeable
    // - Value

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

{
    let person = {};
    person.age = 25;
    person.ssn = '034-569-2345';

    Object.defineProperty(person, 'ssn', {
        enumerable: false
    })

    for(let property in person){
        console.log(property);
    }
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person, 'fullName', {
    get: function(){
        return this.firstName + ' '+ this.lastName;
    },
    set: function(Value){
        let parts = Value.split(' ');
        if(parts.length == 2){
            this.firstName = parts[0]
            this.lastName = parts[1]
        }else{
            throw 'Invalid name format';
        }
    }
})
console.log(person.fullName);