let div = document.createElement('div');
div.id = 'content';
div.className = 'note';
// div.innerHTML = '<p>CreateElement in JavaScript</p>';

let h2 = document.createElement('h2');
h2.textContent = 'Add h2 Element to the div';
div.appendChild(h2)
document.body.appendChild(div)



const menu = document.querySelector('#menu');
let li = document.createElement('li');
li.textContent = 'Service';
menu.appendChild(li)

li = document.createElement('li');
li.textContent = 'About Us';
menu.appendChild(li)


// let script = document.createElement('script');
// script.src = 'lib.js';
// document.body.appendChild(script);

// function loadJS(url){
//     let script = document.createElement('script');
//     script.src = url;
//     document.body.appendChild(script);
// }
// loadJS('lib.js')

function loadJSAsync(url){
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}
loadJSAsync('lib.js')


