def countdown(numberCountDown):
    newArray = []
    for number in range(0, numberCountDown+1):
        newArray.append(numberCountDown-number)
    return newArray

def printAndReturn(twoNumberArray):
    print(twoNumberArray[0])
    return twoNumberArray[1]

def firstPlusLength(array):
    return array[0] + len(array)

def valuesGreaterThanSecond(array):
    if len(array) == 1:
        return False
    numberGreater = 0
    newArray = []
    for number in array:
        if number > array[1]:
            newArray.append(number)
            numberGreater += 1
    print(numberGreater)
    return newArray

def thisLengthThatValue(size, value):
    array = []
    for index in range(size):
        array.append(value)
    return array