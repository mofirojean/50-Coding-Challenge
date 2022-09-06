// Challenge 47: Deep copy a jagged array
// with numbers or other arrays in a new array

function copyArray(arr){
    let newArr = []

    for (let el of arr){

        if(Array.isArray(el)){
            el = copyArray(el);
        }

        newArr.push(el)
    }

    return newArr;
}

// Driver Method
let array = [1, 2, [15, [23], [5, 12]], [100]];
console.log(copyArray(array))
