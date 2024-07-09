let intervalId;

function toggleColor(){
    let h = document.getElementById('flashtext');
    h.style.color = h.style.color == 'green' ? 'blue' : 'green';
}

function stop(){
    clearInterval(intervalId);
}

function start(){
    intervalId = setInterval(toggleColor, 1000);
}