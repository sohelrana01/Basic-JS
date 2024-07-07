const clickBtn = document.getElementById('btnCount');

clickBtn.addEventListener('click', () => {
    let heading = document.getElementsByTagName('h2');
    console.log(heading.length);
})