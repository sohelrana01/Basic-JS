function getScores (){
    return [70, 80, 90, 60]
}

// let scores = getScores();   old way

let [x, y, ...srr] = getScores()
console.log(x);
console.log(y);
console.log(srr);

///// Nested array destructuring

function getProfile(){
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ]
}

let [fName, lName, [color1, color2, color3]] = getProfile();
console.log(fName);
console.log(color1);


////// Function return multiful values array destructuring

function stat(a, b){
    return [
        a+b,
        (a+b)/2,
        a-b
    ]
}

let [sum, ave, sub] = stat(20, 30)
console.log(sum, ave, sub);


