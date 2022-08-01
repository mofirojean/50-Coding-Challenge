"""
@ nebaDesmond
@Project 22: Reverse a string
"""


# Using string slicing method.
def revString1(string):
    rev_str = string[::-1]
    return rev_str


# Using the reversed() function.
def revString2(string):
    rev = reversed(string)
    rev_str = "".join(rev)
    return rev_str


# Using recursion.
def revString3(string):
    if len(string) == 0:
        return string
    else:
        return revString3(string[1:]) + string[0]


# string = "Python"
# print(revString3(string))

# Using for loop
def revString4(string):
    rev_str = ""
    for s in string:
        rev_str = s + rev_str
    return rev_str
