function createMenuItem(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
const menu = document.querySelector('#menu');
menu.appendChild(createMenuItem('Home'))
menu.appendChild(createMenuItem('Services'))
menu.appendChild(createMenuItem('About Us'))

const firstList = document.querySelector('#first-list');
const SecondList = document.querySelector('#second-list');
const everest = firstList.firstElementChild;

SecondList.appendChild(everest)

