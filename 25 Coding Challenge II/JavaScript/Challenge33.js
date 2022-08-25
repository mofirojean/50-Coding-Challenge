// Challenge 33: Calculate the sum of numbers received in a comma delimited string

function sumCSV(num){

    let ar = num.split(",");
    let sum = 0;

    for (let n in ar){
        sum += parseFloat(ar[n]);
    }

    return sum;
}

// Driver Method
let csvNum = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
console.log(sumCSV(csvNum));

