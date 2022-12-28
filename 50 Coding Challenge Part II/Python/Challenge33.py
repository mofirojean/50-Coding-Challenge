# Challenge 33: Calculate the sum of numbers
# received in a comma delimited string


def sumCSV(csvFile):
    sum_csv = 0
    arr = csvFile.split(",")

    for i in arr:
        sum_csv += int(i)

    return sum_csv


# Driver Method
print(sumCSV("32, 24, 45, 38, 5, 1"))
