// Challenge 45: Create a function to calculate the sum of
// all the numbers in a jagged array (array contains numbers or other
// arrays of numbers on an unlimited number of levels)

// Works by using Recurson
function sumArray(arr){
    let sum = 0;

    for ( let el of arr){
        if(Array.isArray(el)){
            el = sumArray(el);
        }

        sum += el;
    }

    return sum;
}

// Driver Method
let array = [1, 2, [15, [23], [5, 12]], [100]];
console.log("Sum:", sumArray(array));

