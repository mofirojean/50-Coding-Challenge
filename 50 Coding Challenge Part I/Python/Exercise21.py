"""
Challenge 21: Rotate an array to the right 1 position
"""


# Function to right-rotate a list by one position
def rightRotateByOne(arr):
    last = arr[len(arr) - 1]
    for i in range(len(arr) - 1, -1, -1):
        arr[i] = arr[i - 1]
    arr[0] = last


# Function to left-rotate a list by `r` positions
def rightRotate(arr, r):
    # base case: invalid input
    if r < 0 or r >= len(arr):
        return

    for i in range(r):
        rightRotateByOne(arr)


# Driver method
myArr = [1, 2, 3, 4, 5]
r = 2
rightRotate(myArr, r)
print(myArr)
