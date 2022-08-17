"""
Challenge 18: Print the first 100 prime numbers
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


# function prints the first nPrime numbers
def printPrimes(nPrimes):
    for i in range(1, nPrimes + 1):
        if is_prime(i):
            print(i)


# Driver Method
printPrimes(13)
