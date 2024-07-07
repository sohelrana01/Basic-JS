// const cBox = document.querySelector('#accept');
//     const btn = document.querySelector('#btn');
//     btn.addEventListener('click', ()=>{
//         alert(cBox.value)
//         console.log(cBox.value);
//     })

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event)=>{
    let checkBoxes = document.querySelectorAll('input[name="color"]:checked');
    let values = [];
    checkBoxes.forEach((checkbox)=>{
        values.push(checkbox.value)
    })
    console.log(values);
})