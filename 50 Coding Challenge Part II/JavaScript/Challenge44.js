// Challenge 44: Create a function that will convert a string
// containing a binary number into a number

function binaryToNumber(sBinary){
    return parseInt(sBinary, 2);
}

// Driver Method
console.log(binaryToNumber("11111111"))
console.log(binaryToNumber("00000010"))
console.log(binaryToNumber("10000001"))