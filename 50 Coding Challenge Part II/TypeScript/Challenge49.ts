// Challenge 49: Shuffle an array of strings

// using math.random

function shuffleArray(arr: string[]) {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}


// Driver Method
let ar = ["Shuffle", "an", "array", "of", "strings"]
console.log(shuffleArray(ar))
