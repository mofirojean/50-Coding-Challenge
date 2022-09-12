# Challenge 32: Create a function that will capitalize the first letter of each
# word in a text

# Using the capitalize()
def capitalizeWord(text):
    arr = text.split()
    result = list()
    for i in arr:
        result.append(i.capitalize())
    return " ".join(result)


txt = "hello world"
print(capitalizeWord(txt))
