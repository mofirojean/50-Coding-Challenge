# Challenge 42: Create a function that will
# return a Boolean value indicating if two circles defined
# by center coordinates and radius are intersecting
import math


def collisionCircleCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R):
    distance = getDistance(circle1X, circle1Y, circle2X, circle2Y)
    return distance <= circle1R + circle2R


def getDistance(x1, x2, y1, y2):
    return math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2))


if __name__ == "__main__":
    print(collisionCircleCircle(200, 200, 100, 300, 300, 50))
