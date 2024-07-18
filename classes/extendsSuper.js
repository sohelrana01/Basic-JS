{
    function Animal(legs){
        this.legs = legs;
    }
    
    Animal.prototype.walk = function(){
        console.log('walking on ' + this.legs + ' legs');
    }
    
    function Bird(legs){
        Animal.call(this, legs);
    }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Animal;
    
    Bird.prototype.fly = function(){
        console.log('flying');
    }
    
    let pigeon = new Bird(2);
    pigeon.walk();
    pigeon.fly()
}

// ES6 simplified these steps by using extends and super keywords
class Animal {
    constructor(legs){
        this.legs = legs;
    }
    walk(){
        console.log(`walking on ${this.legs} legs`);
    }
}

class Bird extends Animal {
    constructor(legs){
        super(legs)
    }
    fly(){
        console.log('flying');
    }
}
let bird = new Bird(2);
bird.walk();
bird.fly();