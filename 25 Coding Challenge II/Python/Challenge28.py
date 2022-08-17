"""
Challenge 28: calculate the sum of the first 100 prime numbers
"""


# Returns true is a number is prime
import math


def isPrime(n) -> bool:
    if n < 2:
        return False
    if n == 2:
        return True

    maxDiv = math.sqrt(n)
    i = 2
    while i <= maxDiv:
        if n % i == 0:
            return False
        i += 1
    return True


def printPrime(nPrimes):
    n = 0
    i = 2
    total = 0

    while n < nPrimes:
        if isPrime(i):
            total += i
            n += 1
        i += 1

    return total


# Driver Method
def main():
    print("The Sum of the first 100Th prime numbers", printPrime(100))


if __name__ == "__main__":
    main()
