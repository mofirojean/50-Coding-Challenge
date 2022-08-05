/**
 * Challenge 9:
 * Create a function that will convert from  Fahrenheit to Celsius
 * Reminder: C = F – 32 / 1.8
 */
function fahrenheitToCelsius(tem){
    return (tem - 32) / 1.8;
}

console.log(fahrenheitToCelsius(10).toFixed());