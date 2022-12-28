// Challenge 46: Find the maximum number in a jagged array of
// numbers or array of numbers


// Using recursion
function findMax(arr){
    // a number smaller than all trhe element in the array
    let max = 0;

    for (let i = 0; arr.length; i++){

        let el = arr[i];
        // If an element is of type array the invoke thesame function
        // to find out te maximum number of that element 
        if(Array.isArray(el)){
            el = findMax(el);
        }

        if (el > max){
            max = el;
        }
    
    }

    return max;
}

// Driver Method
let array = [1, 2, [15, [23], [5, 12]], [100]];
console.log("Max:", findMax(array))
