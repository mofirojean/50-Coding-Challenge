// Challenge 24: Create a function that will merge
// two arrays and return the result as a new array

function mergeArray (arr1: number[], arr2: number[]): number[] {
    let newArr: number[] = [];

    for (let ar of arr1) {
        newArr.push(ar);
    }
    
    for (let ar of arr2) {
        newArr.push(ar);
    }

    return newArr;
}

// Using the .concat() method
const addArray = (array1: number[], array2: number[]) => array1.concat(array2);

// Driver Method
let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];
console.log(`Using a function: ${mergeArray(ar1, ar2)}`);
// used another method
console.log(`Using the .concat() method: ${addArray(ar1, ar2)}`);