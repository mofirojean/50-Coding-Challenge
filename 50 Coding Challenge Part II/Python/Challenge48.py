# Challenge 48: Create a function to return the longest word(s) in a string
def getTheLongestWord(text: str):
    words = getWords(text)
    maxSize = 0
    longestWords = []

    for word in words:
        currWordSize = len(word)
        if currWordSize > maxSize:
            maxSize = currWordSize
            longestWords = [word]
        elif currWordSize == maxSize:
            longestWords.append(word)
    return longestWords


def getWords(text: str):
    arrNew = []
    words = text.split(" ")
    for word in words:
        newAr = []
        for char in word:
            if not isSeperator(char):
                newAr.append(char)
        arrNew.append("".join(newAr))
    return arrNew


def isSeperator(char: str) -> bool:
    seperators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"]
    return char in seperators


# Driver Method
def main():
    text = "Create a function to return the longest word(s) in a string"
    print(getTheLongestWord(text))


if __name__ == "__main__":
    main()
