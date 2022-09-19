// Challenge 12a: Create a function that receives an array of numbers and returns an
// array containing only the positive numbers.


function getPositive(arr: number[]): number[]{
    let newArray: number[] = [];

    for (let ar of arr){
        if (ar >= 0){
            newArray.push(ar)
        }
    }

    return newArray;
}

// Driver Method
let arr1 = [2, 3, -1, 5, 7, 9, 10, 15, 95]
console.log(`Positive Numbers: ${getPositive(arr)}`);
