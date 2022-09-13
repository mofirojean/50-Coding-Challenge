# Challenge 34: Create a function that will
# return an array with words inside a text
def getWords(text):
    startWords = text.split()
    words = []
    for i in startWords:
        word = []
        for j in i:
            if not isSeperator(j):
                word.append(j)
        words.append("".join(word))
    return words


def isSeperator(char):
    seperators = [" ", ",", "\t", "\n", "\r", ";", ":", ".", "!", "?", "(", ")"]
    return char in seperators


# driver Method
print(getWords(" Create a function, that will return an array (of strings), with words inside a text"))
