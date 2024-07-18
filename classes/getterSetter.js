// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }
// let person = new Person('Sohel');
// console.log(person.name);

class Person {
    constructor(name){
        this.setName(name);
    }
    getName(){
        return this.name;
    }
    setName(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Sohel Rana');
// console.log(person);
person.setName('John Doe');
// console.log(person.getName());

let meeting = {
    attendees: [],
    add(attendee){
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest(){
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
}
meeting.add('Sohel').add('John').add('Peter').add('smith');
console.log(`The latest attende is ${meeting.latest}.`);