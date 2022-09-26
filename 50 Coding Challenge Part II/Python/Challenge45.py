# Challenge 45: Create a function to calculate the sum of
# all the numbers in a jagged array (array contains numbers or other
# arrays of numbers on an unlimited number of levels)


def sumArray(arr):
    total = 0
    for sam_ar in arr:
        if type(sam_ar) in (tuple, list):
            sam_ar = sumArray(sam_ar)
        total += sam_ar
    return total


# Driver Method
if __name__ == "__main__":
    newArr = [1, 2, [25, [23], [5, 12]], [100]]
    print(sumArray(newArr))
