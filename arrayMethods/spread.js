const odd = [1, 3, 5];
// const combined = [2, 4, 6, ...odd];
// const combined = [...odd, 2, 4, 6, ...odd];
const combined = [...odd, 2, ...odd, 4, 6, ...odd];
// console.log(combined);

function fNums (a, b, ...args){
    // console.log(args);
}
fNums(1, 2, 3, 4, 5, 6, 7)

let rivers = ['Jamuna', 'Padma', 'Megna'];
let moreRivers = ['Cornofully', 'Mohananda'];

let allRivers = [...rivers, ...moreRivers]

rivers.push(...moreRivers);
// console.log(rivers);
console.log(allRivers);

let chars = ['A', ...'BC', 'D'];
console.log(chars);