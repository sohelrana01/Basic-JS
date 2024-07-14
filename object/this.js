let counter = {
    count: 0,
    next: function(){
        return ++this.count
    },
};

console.log(counter.next());

function show() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();

// Method invocation of an object
let car = {
    brand: 'Honda',
    getBrabd: function(){
        return this.brand;
    }
}

console.log(car.getBrabd());

// Indirect invocation

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");