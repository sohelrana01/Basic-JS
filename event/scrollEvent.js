let control = document.querySelector('#control');

control.addEventListener('click', (e)=>{

    let sDiv= document.getElementById('scrollDemo');

    let target = e.target;

    switch(target.id){
        case 'btnScrollLeft':
            sDiv.scrollLeft += 20;
            break;
        case 'btnScrollRight':
            sDiv.scrollLeft -= 20;
            break;
        case 'btnScrollTop':
            sDiv.scrollTop += 20;
            break;
        case 'btnScrollBottom':
            sDiv.scrollTop -= 20;
            break;
    }
})