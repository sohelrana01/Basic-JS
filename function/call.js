// function add(x, y){
//     return x + y
// }
// console.log(add instanceof Function);

var greeting = 'Hi';
let messenger = {
    greeting: 'Hello'
}

function say(name){
    console.log(this.greeting + ' ' + name);
}
say.call(this, 'Sohel')
say.call(messenger, 'Sohel')

{
    function Box(height, width){
        this.height = height;
        this.width = width;
    }

    function Widget(color, height, width){
        Box.call(this, height, width);
        this.color = color;
    }

    let widget = new Widget('red', 100, 200);
    console.log(widget);
}
{
    function isOdd(number){
        return number % 2;
    }
    function getOddnumbers(){
        return Array.prototype.filter.call(arguments, isOdd)
    }
    console.log(getOddnumbers(10, 3, 4, 1, 5, 9, 7));
}