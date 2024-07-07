let btnKeys = document.querySelector('#btnKeys');

btnKeys.addEventListener('click', (e)=>{
    let keys = [];

    if(e.shiftKey) keys.push('shift');
    if(e.ctrlKey) keys.push('ctrl');
    if(e.altKey) keys.push('alt');
    if(e.metaKey) keys.push('meta');

    let msgKeys = document.querySelector('#msgKeys');
    msgKeys.textContent = `Keys: ${keys.join('+')}`;

})