let str = 'JavaScript String split()';
let subStrings = str.split(' ', 2);
console.log(subStrings);

let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
// let sentences = paragraph.split(/[!,?,.]/);
let sentences = paragraph.split(/([!,?,.])/);
console.log(sentences);