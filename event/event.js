const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     alert('Hello Btn is clicked')
// })

// function handleClick(){
//     alert('Button is Clicked');
// }

// btn.addEventListener('click', handleClick)

{
    btn.addEventListener('click', (event)=>{
        console.log('The Button was Clicked!');
        console.log(event.type);
        // event.stopImmediatePropagation();
    });
    
    document.body.addEventListener('click', (event)=>{
        console.log('The Body was Clicked!');
    })
}

{
    btn.onclick = function(){
        alert(this.id)
        alert(this.type)
    }
}

{
    window.addEventListener('load', checkJSLoaded);

    function checkJSLoaded(){
        let script = document.createElement('script');
        script.addEventListener('load', (event)=>{
            console.log('app.js file has been loaded');
        });
        script.src = 'app.js';
        // document.body.appendChild(script);
    }
}