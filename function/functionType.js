{
    function add(x, y){
        console.log(new.target);
        return x + y;
    }
    console.log(add(4, 5));
    
    console.log(add.length);
    console.log(add.prototype);
}

// apply(), call(), bind() methods
{
    let cat = {type: 'Cat', sound: 'Meow'};
    let dog = {type: 'Dog', sound: 'Woof'};

    const say = function(message){
        console.log(message);
        console.log(`${this.type} says ${this.sound}`);
    }

    say.apply(cat, ['What does a cat say']);
    say.apply(dog, ['What does a dog say']);
}

{
    let car = {
        speed: 5,
        start: function(){
            console.log('Start with '+ this.speed + 'km/h');
        }
    }

    let aircraft = {
        speed: 10,
        fly: function(){
            console.log('Flying');
        }
    }
    let taxiing = car.start.bind(aircraft);
    taxiing()
    car.start.call(aircraft);
    aircraft.fly.call(car);
}