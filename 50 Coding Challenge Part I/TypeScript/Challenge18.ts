// Challenge 18: Print the first 100 prime numbers

// function prints th first nPrime numbers
function printPrime(nPrime: number): void {
    let n: number = 0;
    let i: number = 2;

    while (n < nPrime){
        if (isPrime(i)){
            console.log(`--> ${i}`)
            // n should only increment if i is a prime
            n++;
        }
        i++;
    }
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
printPrime(100)
