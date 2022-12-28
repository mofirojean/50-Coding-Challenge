// Challenge 27a:  Create a function that will receive an array of
// numbers as argument and will return a new array with distinct elements

function getDistinctElement (arr: number[]): Array<number> {
    // create array to hold distinct value
    let newArr: number[] = []

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// Driver Method
let arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
console.log(getDistinctElement(arr));
