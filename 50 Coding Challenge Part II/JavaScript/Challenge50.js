//  Challenge 50: Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n


function getRandomNumbers(n){
    let arr = []
    for (let i = 1; i <= n; i++){
        arr.push(i);
    }

    shuffleArray(arr);

    return arr;
}


// shuffle method implemented using Fisher-yates shuffle algoeithm
function shuffleArray(arr) {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

// Driver Method
console.log(getRandomNumbers(10))
