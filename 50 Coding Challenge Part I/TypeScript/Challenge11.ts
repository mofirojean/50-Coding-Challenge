// Challenge 11: Calculate the average of the numbers in an array of numbers
function averageArray(arr: number[]): number{
    let sum: number = 0;
    let n: number = arr.length;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    return sum / n;
}

// Driver method
let arr = [1, 3, 9, 15, 90];
console.log(`Average: ${averageArray(arr)}`);
