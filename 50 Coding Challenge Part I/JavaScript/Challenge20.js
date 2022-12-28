// Challenge 20: Rotate an array to the left 1 position

function rotateLeft(arr){
    let first = arr.shift() // removes the first element of the array and returns it
    arr.push(first);

    return arr;
}

// Driver Method
let arr = [1, 2, 3, 4];
console.log(rotateLeft(arr));



