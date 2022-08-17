"""
Challenge 20: Rotate an array to the left 1 position
"""


# Function to left-rotate a list by one position
def leftRotateByOne(arr):
    first = arr[0]
    for i in range(len(arr) - 1):
        arr[i] = arr[i + 1]
    arr[-1] = first


# Function to left-rotate a list by `r` positions
def leftRotate(arr, r):
    # base case: invalid input
    if r < 0 or r >= len(arr):
        return

    for i in range(r):
        leftRotateByOne(arr)


# Driver method
myArr = [1, 2, 3, 4, 5]
r = 2
leftRotate(myArr, r)
print(myArr)
