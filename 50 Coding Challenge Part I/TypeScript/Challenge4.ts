// Challenge 4: Print the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 10; i++){
    console.log(`\n${i} Times Table`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
