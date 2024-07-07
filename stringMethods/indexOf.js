let str2 = 'finding substring in string';
let index2 = str2.indexOf('str');
console.log(index2);

let str = 'You do not know what you do not know until you know.';
let substr = 'know';

let count = 0;
let index = str.indexOf(substr);
while(index !== -1){
    count++;
    index = str.indexOf(substr, index + 1);
}
console.log(count);

///// StartWith()
const title = 'Jack and Jill Went Up the Hill';

console.log(title.startsWith('Jack'));