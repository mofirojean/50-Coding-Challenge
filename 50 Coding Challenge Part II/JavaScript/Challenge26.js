// Challenge 26: Create a function that will receive
// two arrays and will return an array with elements that are in the first
// array but not in the second

function mergeArrExclusive(arr1, arr2){
    let newArr = [];

    for (let ele of arr1){
        if (!arr2.includes(ele)) newArr.push(ele);
    }

    return newArr;
}
//  using arrow function
const mergeLeft =  (arr1, arr2) => {
    let newArr = [];

    for (let ele of arr1){
        if (!arr2.includes(ele)) newArr.push(ele);
    }

    return newArr;
};

// Driver Method
let arr1 = [1, 2, 3, 10, 5, 3, 14];
let arr2 = [-1, 4, 5, 6, 14];
console.log(mergeArrExclusive(arr1, arr2));
console.log(mergeLeft(arr1, arr2));
