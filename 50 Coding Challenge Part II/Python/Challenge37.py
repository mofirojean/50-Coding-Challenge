# Challenge 37: Create a function that will
# convert a string in an array containing the ASCII
# codes of each character

def getCharCode(text):
    arr = []
    for char in text:
        code = ord(char)
        arr.append(code)

    return arr


# Driver Method
print(getCharCode("I love JavaScript"))
