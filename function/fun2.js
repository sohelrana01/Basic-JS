// function add(a, b){
//     console.log(a + b);
// }

// add(10, 40)

let arr1 = [3, 5, 7]
let arr2 = [4, 8, 6]
let arr3 = [2, 9, 7]

// let sum1 = 0;

// for(let i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }

function arrSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum);
}

arrSum(arr1)
arrSum(arr2)
arrSum(arr3)
