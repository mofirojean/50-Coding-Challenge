"""
@author: mofirojean
@project 19: Create a function that will return in an array the first
"nPrimes" prime numbers greater than a number "startAt"
"""


# Returns true if a number is prime
def is_prime(n: int) -> bool:
    """Primality test using 6k+-1 optimization."""
    if n <= 3:
        return n > 1
    if not n % 2 or not n % 3:
        return False
    i = 5
    stop = int(n ** 0.5)
    while i <= stop:
        if not n % i or not n % (i + 2):
            return False
        i += 6
    return True


# function returns the nPrime numbers from a start number
def printPrimes(startAt, nPrimes):
    primeNum = list()
    for i in range(startAt, nPrimes + 1):
        if is_prime(i):
            primeNum.append(i)
    return primeNum


# Driver method
print(printPrimes(10, 100))
