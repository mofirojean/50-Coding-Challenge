// Challenge 22: Reverse an array

function reverseArray (arr: number[]): number[] {
    let newArr: number[] = [];

    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    return newArr;
}

// Driver Method
let arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr));