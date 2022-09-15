# Challenge 38: Create a function that will
# convert an array containing ASCII codes in a string

def codesToString(arr):
    text = ""
    for char in arr:
        txt = chr(char)
        text += txt

    return text


# Driver Method
ar = [73, 32, 108, 111, 118, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116]
print(codesToString(ar))
    