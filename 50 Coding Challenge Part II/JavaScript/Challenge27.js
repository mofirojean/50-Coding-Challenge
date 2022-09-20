// Challenge 27a:  Create a function that will receive an array of
// numbers as argument and will return a new array with distinct elements

// function checks if element is in array
function getDistinctElement(arr) {
    // create array to hold distinct value
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


// Challenge 27a: Create a function that will receive an array of
// numbers as argument and will return a new array with distinct elements

function isInArray2(n, arr, fromIndex, toIndex){
    for (let i = fromIndex; i <= toIndex; i++){
        if (arr[i] === n) return true;
    }
    return false;
}
function getDistinctElement(arr){
    let arr2 = [];
    let lastIndex = arr.length - 1;

    for (let i = 0; i <= lastIndex; i++){
        if (!isInArray2(arr[i], arr, i + 1 , lastIndex)) arr2.push(arr[i]);
    }
    return arr2;
}


// Driver Method
let arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
console.log(getDistinctElement(arr));
console.log(getDistinctElement(arr));
