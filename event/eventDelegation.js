// let home = document.querySelector('#home');
// home.addEventListener('click', (event)=>{
//     console.log('Home menu item was clicked');
// });

// let dashboard = document.querySelector('#dashboard');
// dashboard.addEventListener('click', ()=>{
//     console.log('Dashboard menu item was clicked');
// });

// let report = document.querySelector('#report');
// report.addEventListener('click', ()=>{
//     console.log('Report menu item was clicked');
// })

let menu = document.querySelector('#menu');
menu.addEventListener('click', (event)=>{
    let target = event.target;

    switch(target.id){
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
})

////// JS dispatchEvent

let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    console.log('Btn is clicked');
})

// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent)