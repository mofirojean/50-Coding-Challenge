"""
Challenge 25: Create a function that will receive two arrays of numbers as arguments and
return an array composed of all the numbers that are either in the first array
or second array but not in both
"""


# Function merges two arrays Exclusively
def mergeExclusive(array1, array2):
    arr = []
    for i in array1:
        arr.append(i)
    for j in array2:
        if j not in arr:
            arr.append(j)
    return sorted(arr)


# Driver Method
arr1 = [1, 2, 31, 4, 5, 6, 10]
arr2 = [11, 23, 3, 4, 18, 12]

print(mergeExclusive(arr1, arr2))
