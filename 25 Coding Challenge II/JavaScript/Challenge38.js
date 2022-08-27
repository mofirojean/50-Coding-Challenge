// Challenge 38: Create a function that will convert an array containing ASCII codes in a string


// making use of the rest parameter
function codeToString(arr){
    return String.fromCharCode(...arr);
}
 

// Driver Methdod
// using the solution from Challenge 37
let arr = [
    73,  32, 108, 111, 118, 101,
    32,  74,  97, 118,  97,  83,
    99, 114, 105, 112, 116
  ];
console.log(codeToString(arr));