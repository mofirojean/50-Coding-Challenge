# Challenge 50: Create a function that will receive n as argument and return an array of n
# random numbers from 1 to n
import random


# function generates nth random numbers
def generateRandomNumbers(n):
    arr = []
    for num in range(n):
        arr.append(num)

    return shuffleArray(arr)


# function shuffles an array of elements
def shuffleArray(arr):
    n = len(arr) - 1
    for i in range(n):
        random_index = random.randint(0, n)
        temp = arr.pop(random_index)
        arr.append(temp)
    return arr


# Driver Method
def main():
    print(generateRandomNumbers(10))


if __name__ == "__main__":
    main()

