// Challenge 33: Calculate the sum of numbers received in a comma delimited string

function sumCSV(num: string): number{

    let ar: string[] = num.split(",");
    let sum: number = 0;

    for (let n in ar){
        sum += parseFloat(ar[n]);
    }

    return sum;
}

// Driver Method
let csvNum: string = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
console.log(sumCSV(csvNum));

