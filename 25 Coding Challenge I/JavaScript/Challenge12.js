// Challenge 12a: Create a function that receives an array of numbers and returns an
// array containing only the positive numbers.

function getPositivesA(arr){
    let newArray = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

// Driver Method
let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
console.log("Positive Values " + getPositivesA(arr));

// Challenge 12b: Create a function that receives an array of numbers and returns an
// array containing only the positive numbers.
// Use a “for ... of” loop
function getPositivesB(arr){
    let newArray = [];

    for (let ar of arr){
        if (ar >= 0){
            newArray.push(ar);
        } 
    }

    return newArray;
}
// Driver Method
console.log("Positive Values " + getPositivesB(arr));

// Challenge 12c: Create a function that receives an array of numbers and returns an
// array containing only the positive numbers.
// Requirement: Use .filter() array method

function getPositivesC(arr){
    return arr.filter(el => el >= 0);
}
// Driver Method
console.log("Positive Values " + getPositivesC(arr));
