let Person = class {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

// First class citizen

function factory(aClass){
    return new aClass();
}
let greeting = factory(class {
    sayHi(){console.log('Hi');}
});
greeting.sayHi();

let app = new class{
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');

app.start();