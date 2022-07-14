"""
@author: mofirojean
@project 22: Reverse an array
"""


# using the list slicing method
def reversArray(arr):
    reverse = arr[::-1]
    return reverse


arr = [1, 2, 3, 4, 5]
print(reversArray(arr))
