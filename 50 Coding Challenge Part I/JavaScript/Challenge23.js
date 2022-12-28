// Challenge 23: Reverse a string

function reverseString(string){
    let revStr = "";
    let len = string.length - 1;

    for (let i = len; i >= 0; i--){
        revStr += string[i];
    }

    return revStr;
}

// Driver Method
console.log(revereseString("JavaScript"));
