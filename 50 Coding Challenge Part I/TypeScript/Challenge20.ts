// Challenge 20: Rotate an array to the left 1 position

function rotateLeft(arr: number[]): number[] {
    let first: number = arr.shift()// removes the first element of the array and assign it to first
    arr.push(first);

    return arr;
}

// Driver Method
let arr = [1, 2, 3, 4];
console.log(rotateLeft(arr));