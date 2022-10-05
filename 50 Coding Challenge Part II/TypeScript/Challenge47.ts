// Challenge 47: Deep copy a jagged array
// with numbers or other arrays in a new array

function nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
}

// Driver Method
let array = [1, 2, [15, [23], [5, 12]], [100]];
console.log(nestedCopy(array))