# Coding challenge #11 Calculate the average of the numbers in an array of numbers
# Example array: [1, 3, 9, 15, 90]
# Expected output: 23.6
def average_of_an_array(array):
    n = len(array)
    total = 0
    for i in array:
        total += i
    average = (total / n)
    return average


numbers = [1, 3, 9, 15, 90]
print(average_of_an_array(numbers))
