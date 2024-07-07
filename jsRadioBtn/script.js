const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const group = document.querySelector('#group');
group.innerHTML = sizes.map((size)=>`<div>
    <input type="radio" name="size" value="${size}" id="${size}">
    <label for="${size}">${size}</label>
</div>`).join(' ');

const radioButtons = document.querySelectorAll('input[name="size"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}

function showSelected(e){
    console.log(e);

    if(this.checked){
        document.querySelector('#output').innerText = `You Selected ${this.value}`;
    }
}