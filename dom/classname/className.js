let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);
console.log(data);


let elements = document.getElementsByClassName('secondary');
let data2 = [].map.call(elements, elem => elem.textContent);

console.log(data2);