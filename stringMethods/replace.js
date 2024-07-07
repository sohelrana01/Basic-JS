// let str2 = 'JS will, JS will rock you!';
// let newStr2 = str2.replace('/JS/g', 'JavaScript');
// console.log(newStr2);

// let str = "I like to eat, eat, eat apples and bananas";
// let re = /apples|bananas/gi;

// let newStr = str.replace(re, (match) => { 
//     console.log({match}); 
//     return match.toUpperCase();
// });

// console.log(newStr);

// let str2 = 'JS will, Js will rock you!';
// let newStr2 = str2.replaceAll('JS', 'JavaScript');
// console.log(newStr2);

let str = 'JS will, Js will, js will rock you.';

let pattern = /js/gi;

let newStr = str.replaceAll(pattern, function(match, offset, str) {
    if(match === 'JS') return 'JavaScript';
    if(match === 'Js') return 'Javascript';
    if(match === 'js') return 'javascript';
    return '';
});

console.log(newStr);