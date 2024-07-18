// Before ES6
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}
let john = new Person('Sohel Rana');
// console.log(john.getName());

{
    // ES6 Class declaration

    class Person {
        constructor(name){
            this.name = name;
        }
        getName(){
            return this.name
        }
    }
    let john = new Person('Sohel Rana')
    console.log(john.getName());
}