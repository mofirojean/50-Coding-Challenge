# Coding challenge #8 Create a function that will convert from Celsius to Fahrenheit
def celsius_to_fahrenheit(i):

    return i * 1.8 + 32


tem = int(input("Enter temperature in celsius: "))
print(celsius_to_fahrenheit(tem))