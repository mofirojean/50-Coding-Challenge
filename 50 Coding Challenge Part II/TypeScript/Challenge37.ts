// Challenge 37: Create a function that will convert a string in an array containing the ASCII
// codes of each character

function getCharCode (string: string): number[]{
    let asciiCode: number[] = [];

    for (let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i)
        asciiCode.push(code);
    }
    return asciiCode;
}

// Driver Method
console.log(getCharCode("I love JavaScript"));