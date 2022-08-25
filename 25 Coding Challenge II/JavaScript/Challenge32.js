// Challenge 32:Create a function that will capitalize the first letter of each
// word in a text

function titleCase(str){
    const newStr = str.split(" ");
    const updatedStr = [];

    // loops through each word in our array and converts the 
    // the first character of each word to uoercase
    for(let st in newStr){
        updatedStr[st] = newStr[st][0].toUpperCase() + newStr[st].slice(1).toLowerCase();
    }

    return updatedStr.join(" ");
}

// Driver Method
let str = "my dear friends"
console.log(titleCase(str))
