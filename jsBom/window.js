// var counter = 1;
// var showCounter = () => console.log(counter);

// console.log(window.counter);
// window.showCounter();

let features = 'height=600,width=800',
    url = 'http://localhost/js/about.html';

let jsWindow = window.open(url, 'about', features);

setTimeout(() => {
    window.open('http://localhost/js/contact.html', 'about')
}, 3000);


// const width = window.innerWidth;
// console.log(width);