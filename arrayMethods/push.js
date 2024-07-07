let numbers = [10, 20, 30]
numbers.push(40, 50, 60);
console.log(numbers, numbers.length);

// Push an array to another array

let colors = ['red', 'green', 'blue'];
let kalars = ['tomato', 'black', 'white']

for(const color of kalars){
    colors.push(color)
}

// colors.push(...kalars)

console.log(colors);

let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,

    append(message){
        [].push.call(this, ...arguments)
    }
}

greetings.append('Sohel', 'John', 'Doe')
greetings.append('Rana')
console.log(greetings);

