// Challege 28: Calculate the sum of first 100 prime numbers

// function prints th first nPrime numbers
function sumPrime(nPrime: number): number {
    let n: number = 0;
    let i: number = 2;
    let sum: number = 0;

    while (n < nPrime){
        if (isPrime(i)){
            sum += i;
            // n should only increment if i is a prime
            n++;
        }
        i++;
    }

    return sum
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
console.log(`Sum of the first 100th prime number: ${sumPrime(100)}`)
