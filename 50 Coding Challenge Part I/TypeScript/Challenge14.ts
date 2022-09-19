// Challenge 14: Print the first 10 Fibonacci numbers without using recursion.

let f0: number = 0;
let f1: number = 1;

console.log(f0);
console.log(f1);

for (let i = 2; i < 10; i++){

    let fi: number = f1 + f0;
    console.log(fi)

    // swaping
    f0 = f1;
    f1 = fi
    
}