{
    function Person(name){
        this.name = name;
    }
    Person.prototype.getName = function(){
        return this.name;
    }
    
    Person.createAnonymous = function(gender){
        let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
        return new Person(name)
    }
}

// ES6 static methods
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
//     static createAnonymous(gender){
//         let name = gender == 'male' ? 'John Doe' : 'jane Doe';
//         return new Person(name);
//     }
// }

class Item {
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount(){
        return Item.count;
    }
}
let pen = new Item('Pen', 5);
let notebook = new Item('notebok', 10)
console.log(Item.getCount());