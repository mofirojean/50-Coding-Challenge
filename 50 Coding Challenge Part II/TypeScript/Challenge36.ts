// Challenge 36: Create a function that converts a string to an array of characters

function stringToArrayOfChar (text: string): string[]{
    let newArr: string[] = text.trim().split("");
    return newArr;
}

// Driver Method
console.log(stringToArrayOfChar("Hello how are you doing\n"));