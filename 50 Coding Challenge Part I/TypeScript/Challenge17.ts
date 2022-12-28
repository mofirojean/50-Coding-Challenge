// Challenge 17: Calculate the sum of digits
// of a positive integer number

function sumDigits(num: number): number {
    let str: string = num.toString();
    let sum: number = 0;

    for (let char of str){
        let digits = parseInt(char);
        sum += digits;
    }

    return sum;
}

// Driver Method
console.log(sumDigits(12345));