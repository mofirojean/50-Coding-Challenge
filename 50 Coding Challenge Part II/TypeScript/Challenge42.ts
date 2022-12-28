// Challenge 42: Create a function that will
// return a Boolean value indicating if two circles defined
// by center coordinates and radius are intersecting

function collisionCircle(circle1X: number, circle1Y: number, circle1R: number, circle2X: number, circle2Y: number, circle2R : number) {
    let ar = [circle1X, circle1Y, circle2X, circle2Y]
    let distance = getDistanceCir(ar);
    return distance <= circle1R + circle2R;
}


// calculates the distance between the twi specified points
function getDistanceCir(distance: number[]): number {
    let line1 = distance[1] - distance[0];
    let line2 = distance[3] - distance[2];
    return Math.sqrt(Math.pow(line1, 2) + Math.pow(line2, 2))
}

// Driver Method
console.log(collisionCircle(200, 200, 100, 300, 300, 50));
