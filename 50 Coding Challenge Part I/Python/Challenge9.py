"""
Challenge 9: Create a function that will convert from Fahrenheit it to Celsius
"""
def fahrenheit_to_celsius(i):
    return (i + 32) * 1.8


tem = int(input("Enter temperature in Fahrenheit: "))
print(round(fahrenheit_to_celsius(tem), 1))
