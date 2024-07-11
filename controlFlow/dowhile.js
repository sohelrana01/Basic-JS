// let count = 1
// do{
//     console.log(count);
//     count++;
// } while(count < 5)

const MAX = 10;
const MIN = 1;

let secrateNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0;
let hint = '';
let number = 0;

do{
    let input = prompt(`Please Enter a number between ${MAX} and ${MIN}` + hint)
    number = parseInt(input);
    guesses++;
    if(number > secrateNumber){
        hint = ', and less than ' + number;
    }else if(number < secrateNumber){
        hint = ', and greater than ' + number;
    }else if(number == secrateNumber){
        alert(`Bravo! you're corrent after ${guesses} guess(es).`)
    }
}while(number != secrateNumber)