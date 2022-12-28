# Challenge 27: Create a function that will receive an array of
# numbers as argument and will return a new array with distinct elements


def getDistinctElement(ar):
    distinctArray = list()
    for i in range(len(ar)):
        if ar[i] not in distinctArray:
            distinctArray.append(ar[i])

    return distinctArray


# Driver method
def main():
    arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]
    print(getDistinctElement(arr))


if __name__ == "__main__":
    main()
