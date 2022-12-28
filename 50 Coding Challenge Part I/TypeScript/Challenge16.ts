// Challenge 16: Create a function that will return a Boolean
// specifying if a number is prime

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
console.log(`2 is prime? ${isPrime(2)}`);
console.log(`4 is prime? ${isPrime(4)}`);
console.log(`9 is prime? ${isPrime(9)}`);
