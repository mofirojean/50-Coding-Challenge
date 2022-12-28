# Challenge 26: Create a function that will receive two arrays and will return an array
# with elements that are in the first array but not in the second

def mergeArray(arr1, arr2):
    newArr = list()
    for i in arr1:
        if i not in arr2:
            newArr.append(i)
    
    return newArr


# Driver Method
def main():
    arr1 = [1, 2, 3, 10, 5, 3, 14]
    arr2 = [-1, 4, 5, 6, 14]
    print(mergeArray(arr1, arr2))


if __name__ == "__main__":
    main()
