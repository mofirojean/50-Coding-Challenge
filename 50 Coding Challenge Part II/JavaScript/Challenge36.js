// Challenge 36: Create a function that converts a string to an array of characters

// returns an array of characters from a string 
// method 1: Using the the trim and split method
function stringToArrayOfChar(text){
    let newArr = text.trim().split("");
    return newArr;
}

// method 2: Using the Array.from() method
function stringToArrayOfChar2(text){
    return Array.from(text);
}

// Driver Method
console.log(stringToArrayOfChar("Hello how are you doing"));
console.log("Using the Array.from() method\n",stringToArrayOfChar("Hello how are you doing"));
