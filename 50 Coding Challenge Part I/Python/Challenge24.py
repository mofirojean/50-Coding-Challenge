"""
Challenge 24: Create a function that will merge
two arrays and return the result as
a new array
"""


def mergeArray(array1, array2):
    """empty array to hold the new values"""
    new_array = []
    for i in array1:
        new_array.append(i)
    for j in array2:
        new_array.append(j)
    return sorted(new_array)


# Driver Method
arr1 = [1, 4, 5, 7, 3, 8]
arr2 = [34, 23, 344, 86]
print(mergeArray(arr1, arr2))


