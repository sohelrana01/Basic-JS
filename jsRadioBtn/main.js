const btn = document.querySelector('#btn');
const output = document.querySelector('#output')
const radioButtons = document.querySelectorAll('input[name="size"]');

btn.addEventListener('click', ()=>{
    let selectedSize;
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            selectedSize = radioButton.value;
            break;
        }
    }

    output.innerText = selectedSize ? `Your selected ${selectedSize}` : `You haven't selected any size`;

});
