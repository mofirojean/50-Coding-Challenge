// Challenge 17: Calculate the sum of digits
// of a positive integer number

function sumDigits(n){
    let s = n.toString();
    let sum = 0;

    for (let char of s){
        let digit = parseInt(char);
        sum += digit;
    }

    return sum;
}

// Driver Method
let sum = sumDigits(12345);
console.log(sum);
