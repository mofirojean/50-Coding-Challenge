# Challenge 41: Create a function to calculate the distance between two points defined
# by their x, y coordinates
import math


def getDistance(x1, x2, y1, y2):
    return math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2))


# Driver Method
if __name__ == "__main__":
    print(getDistance(100, 100, 400, 300))
