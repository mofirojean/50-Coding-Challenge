// Challenge 13: Find the maximum number in an array of numbers

function maxNum (arr: number[]): number {
    let max: number = arr[0];

    for (let ar of arr){
        if (ar > max){
            max = ar;
        }
    }

    return max;
}

// Driver Method
let arr2 = [2, 3, -1, 5, 7, 9, 10, 15, 95]
console.log(`Maximum Number: ${maxNum(arr2)}`)
