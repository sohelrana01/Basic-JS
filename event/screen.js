let track = document.querySelector('#track');

track.addEventListener('mousemove', (e)=>{
    
    let output = document.querySelector('#output');

    output.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
})