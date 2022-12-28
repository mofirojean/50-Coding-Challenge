// Challenge 13: Find the maximum number in an array of numbers

const maxNum = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

// Driver Method
let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
console.log("Maximum Number: " + maxNum(arr));
