// Challenge 11: Calculate the average of the numbers in an array of numbers

function averageArray(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}

// Driver Method
let arr = [1, 3, 9, 15, 90];
console.log("Average " + averageArray(arr));
