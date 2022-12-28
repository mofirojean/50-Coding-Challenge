# Challenge 47: Deep copy a jagged array with numbers or other arrays in a new array

def copyArray(ar):
    samArr = []
    for sam_ar in ar:
        if type(sam_ar) in (tuple, list):
            sam_ar = copyArray(sam_ar)
        samArr.append(sam_ar)

    return samArr


# Driver Method
if __name__ == "__main__":
    newArr = [1, 2, [25, [23], [5, 12]], [100]]
    print(copyArray(newArr))
