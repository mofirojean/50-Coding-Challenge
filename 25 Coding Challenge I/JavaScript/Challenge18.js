// Challenge 18: Print the first 100 prime numbers

// function prints the first nPrime numbers
function printPrime(nPrime){
    let n = 0;
    let i = 2;

    while (n < nPrime){
        if (isPrime(i)){
            console.log(" ---> ", i);
            n++;
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


// Driver method
printPrime(100);