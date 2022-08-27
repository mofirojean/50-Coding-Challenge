// Challenge 37: Create a function that will convert a string in an array containing the ASCII
// codes of each character

function getCharCode(string){
    let arr = [];

    for (let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i);
        arr.push(code);
    }
    return arr;
}


// Driver Method
console.log(getCharCode("I love JavaScript"));