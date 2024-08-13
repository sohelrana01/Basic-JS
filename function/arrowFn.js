function add(a, b){
    return a + b;
}
console.log(add(3,4));

let add2 = (x, y) => x + y;
console.log(add2(5,7));

let numbers = [4,2,6];
numbers.sort((a,b) => a - b);
console.log(numbers); // [6,4,2]

let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);
console.log(lengths);



let setColor = function (color) {
    return {value: color}
};
let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"

function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;
