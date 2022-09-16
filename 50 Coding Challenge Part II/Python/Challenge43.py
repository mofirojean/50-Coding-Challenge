# Challenge 43: Create a function that will receive a bi-
# dimensional array as argument and a number and will extract as a
# unidimensional array the column specified by the number


def extractCol(arr, colNo):
    arrCol = list()
    for i in range(len(arr)):
        arrCol.append(arr[i][colNo])
    return arrCol


# Driver Method
if __name__ == "__main__":
    arr = [
        ["John", 120],
        ["Jane", 115],
        ["Thomas", 123],
        ["Mel", 112],
        ["Charley", 122]
    ]
    print(extractCol(arr, 1))
