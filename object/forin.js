let person = {
    firstName: 'Sohel',
    lastName: 'Rana',
    ssn: '5353-33-6664'
}

for(let prop in person){
    console.log(prop + ':' + person[prop]);
}

// somewhere else
Array.prototype.foo = 100;

const items = [10, 20, 30];
let total = 0;

for (var prop in items) {
  console.log({ prop, value: items[prop] });
  total += items[prop];
}
console.log(total);
{
    let person = {
        firstName: 'Sohel',
        lastName: 'Rana'
    }
    const employee = Object.create(person, {
        job: {
            value: 'JS Developer',
            enumerable: true
        }
    });
    console.log(employee.hasOwnProperty('job'));
    console.log(employee.hasOwnProperty('firstName'));
    console.log(employee.hasOwnProperty('lastName'));
    console.log(employee.hasOwnProperty('ssn'));
}