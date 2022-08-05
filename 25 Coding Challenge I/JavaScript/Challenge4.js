// Challenge 4: Print the multiplication tables with numbers from 1 to 10

function multiply(num){
    for (let i = 1; i <= 10; i++){
        let table  =  num + " * " + i + " = " + (i * num);
        console.log(table);
    }
}

for (let i = 1; i <= 10; i++){
    console.log("Multiplication table for " + i);
    multiply(i);
}