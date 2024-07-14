let person = {
    firstName: 'Sohel',
    lastName: 'Rana',
    currentAge: 27
}

// Object Destructuring

let {firstName: fName, lastName: lName} = person;

// assign default value 
let {firstName, lastName, midleName = '', currentAge: age = 18} = person;
// console.log(midleName);
// console.log(age);

{
    // let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
    let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

    let person= {
        firstName: 'Sohel',
        lastName: 'Rana'
    }
    console.log(display(person));
}