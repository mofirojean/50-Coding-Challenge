//  Challenge 10: Calculate the sum of numbers in an array of numbers.

function sumArray(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

// Driver Method
let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
console.log(sumArray(arr));n