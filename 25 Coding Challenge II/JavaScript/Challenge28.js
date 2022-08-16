// Challege 28: Calculate the sum of first 100 prime numbers

// function prints the first nPrime numbers
function printPrime(nPrime){
    let n = 0;
    let i = 2;
    let sum = 0;

    while (n < nPrime){
        if (isPrime(i)){
            sum += i;
            
        }
        n++;
        i++;
    }

    return sum;
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


// Driver method
console.log("The sum of the first 100 prime number", printPrime(100));