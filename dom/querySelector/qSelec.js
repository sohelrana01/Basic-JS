// let element = document.querySelector('*')
let element = document.querySelectorAll('*')

// let firstHeading = document.querySelector('h2')
let firstHeading = document.querySelectorAll('h2')

firstHeading.forEach(item => {
    console.log(item.innerText);
});