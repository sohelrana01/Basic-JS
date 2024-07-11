for(let i=1; i < 5; i++){
    console.log(i);
}

// Without conditions
for(let j =1; ; j+=2){
    console.log(j);
    if(j > 10){
        break;
    }
}

let sum = 0;
for(let i = 0; i <=9; i++, sum += i);
console.log(sum);