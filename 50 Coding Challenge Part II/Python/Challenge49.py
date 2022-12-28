# Challenge 49: Shuffle an array of strings
import random


def shuffleArray(arr):
    n = len(arr) - 1
    for i in range(n):
        random_index = random.randint(0, n)
        temp = arr.pop(random_index)
        arr.append(temp)
    return arr


# Driver Method
def main():
    ar = ["Shuffle", "an", "array", "of", "strings"]
    print(shuffleArray(ar))


if __name__ == "__main__":
    main()
