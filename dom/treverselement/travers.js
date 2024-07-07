// let note = document.querySelector('.note');
// // console.log(note.parentNode);

// let current = document.querySelector('.current');
// let nextSibling = current.nextElementSibling;

// while(nextSibling){
//     // console.log(nextSibling.innerHTML);
//     nextSibling = nextSibling.nextElementSibling;
// }

let getSiblings = function (e) {
    let siblings = [];
    if(!e.parentNode){
        return siblings;
    }
    let sibling = e.parentNode.firstChild;

    while(sibling){
        if(sibling.nodeType === 1 && sibling !== e){
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerHTML);

// console.log(siblingText);

let content = document.getElementById('menu');
// console.log(content.lastElementChild);

let children = content.children;
console.log(children);