"""
@author: mofirojean
@project 14: Print the first 10 Fibonacci numbers without using recursion. Reminder:
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n-1) + F(n-2)
"""
a = 0
print(a)
b = 1
print(b)
i = 2
final = 0
while i < 10:
    final = a + b
    a = b
    b = final
    print(final)
    i += 1
