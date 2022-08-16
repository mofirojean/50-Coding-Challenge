// Challenge 29: Print the distance between the first 100 prime numbers

function primeDistance(n){
    let lastPrime = 2;
    let i = lastPrime + 1;
    let foundPrimes = 1;
    
    while ( foundPrimes < n){
        if (isPrime(i)){
            console.log(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        i++;
    }
}

// function determines if a number is prime
function isPrime(n){
    if (n < 2){
        return false;
    }
    if (n == 2){
        return true;
    }

    let maxDiv = Math.sqrt(n);

    for (let i = 2; i <= maxDiv; i++){
        if (n % i == 0){
            return false;
        }
    }

    return true;
}

// Driver Method
console.log(primeDistance(100));
