// Challenge 22: Reverse an array

function reverseArray(arr){
    let arr2 = [];

    for(let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }

    return arr2;
}

// Driver Method
let arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr));
