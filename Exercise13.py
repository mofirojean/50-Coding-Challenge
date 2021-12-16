# Coding challenge #13 Find the maximum number in an array of numbers
def max_number(number):
    maximum = 0
    for i in number:
        if i > maximum:
            maximum = i
    return maximum


array = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
print(f"max: {max_number(array)}")
