// Challenge 29: Print the distance between the first 100 prime numbers

function primeDistance(n: number){
    let lastPrime: number = 2;
    let i: number = lastPrime + 1;
    let foundPrimes: number = 1;
    
    while ( foundPrimes < n){
        if (isPrime(i)){
            console.log("Distance:", i - lastPrime, "\tBetween:","\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        i++;
    }
}

// function determines if a number is prime
function isPrime(n: number): boolean{
    if (n < 2){
        return false;
    }
    if (n == 2){
        return true;
    }

    let maxDiv: number = Math.sqrt(n);

    for (let i = 2; i <= maxDiv; i++){
        if (n % i == 0){
            return false;
        }
    }

    return true;
}

// Driver Method
console.log(primeDistance(100));
