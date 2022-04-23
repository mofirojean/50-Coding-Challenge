"""
@author: mofirojean
@project 15: Create a function that will find the nth Fibonacci number using recursion.
"""
def find_fibonacci(n):
    if n == 0:
        print(n)
    if n == 1:
        print(n)
    find_fibonacci1 = n-1
    find_fibonacci2 = n-2
    return find_fibonacci1 + find_fibonacci2

x = find_fibonacci(10)
print(x)
