/////////// keydown, keyup, keypress 

let textBox = document.getElementById('textMessage');

textBox.addEventListener('keydown', (kEvent)=>{
    console.log(`Key = ${kEvent.key}, Code = ${kEvent.code}`)
})