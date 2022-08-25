// Challenge 30: Create a function that will add two indefinite size numbers.

/*
 * This algorithm takes to large numbers in the form of a string anf return their sum
 * reason we use strings is because we cannot store morethan 52 bits as a number in pure JAvaScript
 * Thus in order to sum this numbers we convert them into string and then perform operations on them
 */

// Test Cases
let first = "893427328497983427893248932498034289324";
let second = "234859234879342897893427893274";

function findSum(first, second){
    let sum = "";
    let carry = 0;
    let diff = second.length - first.length;

    // loop performs operation on the numbers
    for (let i = first.length - 1; i >= 0; i--){
        let temp = (Number(first.charAt(i)) % 10) + (Number(second.charAt(i + diff)) % 10) + carry;

        if (temp >= 10){
            sum = (temp % 10) + sum;
            carry = Math.floor(temp/10);
        } else{
            sum += temp;
            carry = 0
        }
    }

    if (carry){
        sum += carry;
    }
    return sum;
}


// DRiver Method
if (first.length >= second.length){
    console.log("The sum is", findSum(first, second));
} else console.log("The sum is", findSum(second, first));
