# Challenge 35: Create a function to convert
# a CSV text to a “bi-dimensional” array

# Using a while loop
def csvToArray(data):
    arrLines = data.split("\n")
    i = 0
    while i < len(arrLines):
        arrLine = arrLines[i].split(";")
        arrLines[i] = arrLine
        i += 1
    return arrLines


# Using for loop
def csvToArrayFor(data):
    arrLines = data.split("\n")
    newArr = []
    for i in arrLines:
        arrLine = i.split(";")
        newArr.append(arrLine)
    return newArr


# Driver Method
csvFile = "John;Smith;954-000-0000\n" + "Mich;Tiger;305-000-0000\n" + "Monique;Vasquez;103-000-0000"
print("Using a while loop:", csvToArray(csvFile))
print("Using a for loop:", csvToArrayFor(csvFile))
