// Challenge 21: Rotate an array to the right 1 position

function rotateRight(arr){
    let last = arr.pop();
    arr.unshift(last);

    return arr;
}

// Driver Method 
let arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr));
