// Challenge 43: Create a function that will receive a bi-
// dimensional array as argument and a number and will extract as a
// unidimensional array the column specified by the number


// functio extract a particular column in our array and store them in a particular array
function extractCol(arr: [string, number][], colNo: number) {
    let arCol: unknown[] = []

    for (let i = 0; i < arr.length; i++) {
        arCol.push(arr[i][colNo]);
    }

    return arCol;
}

// Driver Method
let arr: [string, number][] = [
    ["Jane", 120],
    ["Thomas", 115],
    ["Mel", 123],
    ["Charley", 122]
]
console.log(extractCol(arr, 1))

