# Challenge 31: Create a function  that will return the number of words in a text
# Using regular expression
import re


def countWord(text):
    result = len(re.findall(r'\w+', text))
    return result


# Driver Method
text1 = 'Python !! is the be1st $$             programming language @'
text2 = '   Python !! is the be1st $$      programming language @    '
text3 = '       '
print(countWord(text1))
print(countWord(text2))
print(countWord(text3))
