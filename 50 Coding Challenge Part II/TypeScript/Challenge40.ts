// Challenge 40: Implement the bubble sort algorithm for an array of numbers

// performs the bubble sort
function bubbleSort(arr: number[]): number[]{
    let len = arr.length - 1;

    // loop to access each array element
    for (let i = 0; i < len; i++){
        // loop to compare each element
        for(let j = 0; j < len - i; j++){

            // comparing adjecent element
            // change > to < to sort in descending order
            if (arr[j] > arr[j + 1]){

                // swapping occurs if elements
                // are not the intended order
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

// Driver Method
let arr = [-2, 45, 0, 11, -9 ];
console.log(bubbleSort(arr));