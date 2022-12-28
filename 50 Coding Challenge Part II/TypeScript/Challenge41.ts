// challenge 41: Create a function to calculate the distance between two points defined
// by their x, y coordinates

function getDist(distance: number[]): number {
    let line1 = distance[1] - distance[0];
    let line2 = distance[3] - distance[2];
    return Math.sqrt(Math.pow(line1, 2) + Math.pow(line2, 2))
}

// Driver Method
let obj = [ 2, 4, 4, 8 ]
console.log(getDist(obj));

