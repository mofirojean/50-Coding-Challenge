// Challenge 19: Create a function that will return in an array the first
// "nPrimes" prime numbers greater than a number "startAt"

function getPrimes(nPrimes: number, startAt: number): number[]{
    let arr: number[] = []; // holds the prime number

    let i:number = startAt;

    while (arr.length < nPrimes){
        if (isPrime(i)) {
            arr.push(i);
        }
        i++
    }

    return arr;
}

// function determines if a number is prime
function isPrime(num: number): boolean {
    if (num < 2){
        return false;
    }

    if (num == 2){
        return true;
    }

    let maxDiv: number = Math.sqrt(num);

    for (let i = 2; i <= maxDiv; i++){
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

// Driver Method
console.log(getPrimes(10, 100));
