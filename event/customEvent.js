// function highlight(elem, callback){
//     const bgColor = 'yellow';
//     elem.style.backgroundColor = bgColor;

//     if(callback && typeof callback === 'function'){
//         callback(elem);
//     }
// }

// let note = document.querySelector('#note');
// function addBorder(elem){
//     elem.style.border = 'solid 1px green';
// }

// highlight(note, add)


{
    function highlight(elem){
        const bgColor = 'yellow';
        elem.style.backgroundColor = bgColor;

        // Create the event
        let event = new CustomEvent('highlight', {
            detail: {
                backgroundColor: bgColor
            }
        })

        elem.dispatchEvent(event);
    }
    // Select the div element
    let div = document.querySelector('#note');

    function addBorder(elem){
        elem.style.border = 'solid 1px green';
    }

    div.addEventListener('highlight', function(e){
        addBorder(this)
        console.log(e.detail);
    })
    highlight(div)
}
