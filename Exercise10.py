# Coding challenge #10 Calculate the sum of numbers in an array of numbers.
# Example array: [2, 3, -1, 5, 7, 9, 10, 15, 95]
# Expected output: 145
def sum_of_array(sum):
    total = 0
    for i in sum:
        total += i
    return total


array = [2, 3, -1, 5, 7, 9, 10, 15, 95]
var = sum_of_array(array)
print(var)
