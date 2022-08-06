// Challenge 24: Create a function that will merge
// two arrays and return the result as a new array

function mergeArray(arr1, arr2){
    let newArr = [];

    for(let arr of arr1){
        newArr.push(arr);
    }
    for(let arr of arr2){
        newArr.push(arr);
    }

    return newArr;
}

// Using the .concat() method
const addArray = (array1, array2) => array1.concat(array2);

// Driver Method
let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];
console.log(mergeArray(ar1, ar2));
// used another method
console.log(addArray(ar1, ar2));
