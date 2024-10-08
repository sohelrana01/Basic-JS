let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursdsy';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 1:
        dayName = 'Satarday';
        break;
    default:
        dayName = 'Invalid day'
}
console.log(dayName);

// Get day count based on a month

let year = 2002;
let month = 2;
let dayCount;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0){
            dayCount = 29;
        }else{
            dayCount = 28;
        }
        break;
    default:
        dayCount = -1;
}

console.log(dayCount);