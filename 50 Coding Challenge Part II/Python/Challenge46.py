# Challenge 46: Find the maximum number in a jagged array of
# numbers or array of numbers

def findMax(arr):
    maxNum = 0
    i = 0
    while i < len(arr):
        el = arr[i]
        if type(el) in (tuple, list):
            el = findMax(el)
        if el > maxNum:
            maxNum = el
        i += 1

    return maxNum


# Driver Method
if __name__ == "__main__":
    newArr = [1, 2, [25, [23], [5, 12]], [100]]
    print(findMax(newArr))
    