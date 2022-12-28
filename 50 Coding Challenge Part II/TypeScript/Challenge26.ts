// Challenge 26: Create a function that will receive
// two arrays and will return an array with elements that are in the first
// array but not in the second

function mergeArrExclusive(arr1: number[], arr2: number[]): number[]{
    let newArr: number[] = [];

    for (let element of arr1){
        if (!arr2.includes(element)) newArr.push(element);
    }
    
    return newArr;
}

// Driver Method
let arr1: number[] = [1, 2, 3, 10, 5, 3, 14];
let arr2: number[] = [-1, 4, 5, 6, 14];
console.log(mergeArrExclusive(arr1, arr2));