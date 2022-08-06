// Challenge 25: Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either
// in the first array or second array but not in both

function mergeExclusive(arr1, arr2){
    let newArray = [];
    
    for(let ele of arr1){
        if(arr2.includes(ele)){
            newArray.push(ele);
        }
    }

    for(let ele of arr2){
        if (!arr1.includes(ele)){
            newArray.push(ele);
        }
    }

    return newArray;
}

// Driver Method
let array1 = [1,2,3,10,5,3,15];
let array2 = [1,3,4,5,6,27];
console.log(mergeExclusive(array1, array2));
