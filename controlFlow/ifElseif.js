let weight = 70;
let height = 1.72;

let bmi = weight / (height * height);

console.log(bmi);

let weightStatus;

if(bmi < 18.5){
    weightStatus = 'Underwight';
} else if(bmi >= 18.5 && 24.9){
    weightStatus = 'Healthy weihght';
} else if(bmi >= 25 && bmi <= 29.9){
    weightStatus = 'Overweight';
} else{
    weightStatus = 'Obesity';
}
console.log(weightStatus);