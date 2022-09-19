// Challenge 15: Create a function that will find the
// nth Fibonacci number using recursion.

function findFibonacci( num: number): number {
    if (num == 0){
        return 0;
    }
    if (num == 1){
        return 1;
    }

    return findFibonacci(num - 1) + findFibonacci(num - 2)
}

// Driver Method
console.log(findFibonacci(10))
