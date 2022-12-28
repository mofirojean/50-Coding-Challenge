# Challenge 36 : Create a
# function that converts a string to an
# array of characters

def getChar(text):
    characters = list()
    for i in text:
        characters.append(i)

    return characters


# Driver Method
print(getChar("I love JavaScript"))
