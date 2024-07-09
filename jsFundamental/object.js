let person = {
    firstName: 'John',
    lastName: 'Doe' 
}

console.log(person);

// use space in name property use quotes,
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
console.log(address);

// Delete object property name

delete person.lastName;
console.log(person);

let employee = {
    firstName: 'John',
    lasrName: 'Doe',
    empId: 2
}

console.log('sohel' in employee);
console.log('empId' in employee);