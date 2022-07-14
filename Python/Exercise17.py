"""
@author: mofirojean
@project 17: Calculate the sum of digits
of a positive integer number
"""


def sumDigits(n):
    string = str(n)
    total = 0
    for i in string:
        total += int(i)
    return total


digits = sumDigits(1226252)
print("Sum:", digits)
