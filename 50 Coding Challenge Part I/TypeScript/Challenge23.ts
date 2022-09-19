// Challenge 23: Reverse a string

function reverseString(str: string): string {
    let revStr: string = "";
    let len = str.length - 1;

    for (let i = len; i >= 0; i--){
        revStr += str[i];
    }

    return revStr;
}

// Driver Method
console.log(reverseString("JavaScript"));