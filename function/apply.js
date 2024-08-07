const person = {
    fName: 'Sohel',
    lName: 'Rana'
}

function greet(greeting, message){
    return `${greeting} ${this.fName}. ${message}`
}

let result = greet.apply(person, ['Hello', 'How are you'])
console.log(result);