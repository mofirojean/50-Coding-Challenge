# Challenge 29: Print the distance between the first 100 prime numbers


# prints distance between the first n prime numbers
def printDistance(n):
    lastPrime = 2
    i = lastPrime + 1
    foundPrime = 1

    while foundPrime < n:
        if is_prime(i):
            print(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrime += 1
            lastPrime = i
        i += 1


# Function checks i a number is prime
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


# Driver Method
printDistance(100)
