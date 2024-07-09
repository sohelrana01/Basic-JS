let timeoutId;

function showAlert(){
    timeoutId = setTimeout(alert, 3000, 'setTimeout Demo');
}

function clearAlert(){
    clearTimeout(timeoutId);
}

function task(){
    console.log('setTimeout is called');
}
setTimeout(task, 3000)