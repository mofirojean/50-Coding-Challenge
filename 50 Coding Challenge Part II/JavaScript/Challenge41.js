// challenge 41: Create a function to calculate the distance between two points defined
// by their x, y coordinates

function getDistance(x1, y1, x2, y2){
    let line1 = x2 - x1;
    let line2 = y2 - y1;

    return Math.sqrt(Math.pow(line1, 2) + Math.pow(line2, 2))
}

// Driver Method
console.log(getDistance(2, 4, 4, 8));

