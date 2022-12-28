"""
Challenge 12a: Create a function that receives an array of numbers and returns an array containing only the positive numbers.
 * Requirement: Use a “for” loop
"""
def positive_numbers(numbers):
    positive = []
    for i in numbers:
        if i >= 0:
            positive.append(i)
    return positive


array = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
print(positive_numbers(array))


"""
@project 12b: Create a function that receives an array of numbers and returns an array containing only the negative numbers.
 * Requirement: Use a “for” loop
"""
def negative_numbers(numbers):
    negative = []
    for i in numbers:
        if i < 0:
            negative.append(i)
    return negative


array = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
print(negative_numbers(array))


"""
@project 12c: Create a function that receives an array of numbers and returns an array containing only the positive numbers.
 * Requirement: Use .filter() array method
"""
def filtered_numbers(numbers):
    positive = filter(lambda i: i >= 0, numbers)
    return positive


array = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
print(list(filtered_numbers(array)))
