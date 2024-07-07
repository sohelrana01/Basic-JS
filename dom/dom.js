const para = document.getElementById('message');
console.log(para.innerText);

function toggle(el) {
    const display = el.style.display;
    el.style.display = display === 'block' ? 'none' : 'block';
}

toggle(para)