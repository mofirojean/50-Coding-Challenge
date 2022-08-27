"""
Challenge 18: Print the first 100 prime numbers
"""
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
 

    while n < nPrimes:
        if isPrime(i):
            print(n, "--->", i)
            n += 1
        i += 1


# Driver Method
def main():
    printPrime(100)
    
if __name__ == "__main__":
    main()
    
