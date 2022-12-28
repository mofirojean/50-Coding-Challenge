// Challenge 42: Create a function that will
// return a Boolean value indicating if two circles defined
// by center coordinates and radius are intersecting

function collisionCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R){
    let distance = getDistance(circle1X, circle1Y, circle2X, circle2Y);
    return distance <= circle1R + circle2R;
}


// calculates the distance between the twi specified points
function getDistance(x1, y1, x2, y2){
    let line1 = x2 - x1;
    let line2 = y2 - y1;

    return Math.sqrt(Math.pow(line1, 2) + Math.pow(line2, 2))
}

// Driver Method
console.log(collisionCircle(200, 200, 100, 300, 300, 50));
