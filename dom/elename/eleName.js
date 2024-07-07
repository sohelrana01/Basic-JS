let btnRate = document.getElementById('btnRate');
let output = document.getElementById('output');


btnRate.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if(rate.checked){
            output.innerText = `You Selected: ${rate.value}`;
        }
    })
});