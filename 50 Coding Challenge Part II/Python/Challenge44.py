# Challenge 44: Create a function that will convert a string
# containing a binary number into a number

def binaryToNumber(sBinary):
    return int(sBinary, 2)


# Driver Method
if __name__ == "__main__":
    print(binaryToNumber("11111111"))
