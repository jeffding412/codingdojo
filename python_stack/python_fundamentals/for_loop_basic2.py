def biggieSize(array):
    for index in range(len(array)):
        if array[index] > 0:
            array[index] = "big"
    return array

def countPositives(array):
    numberPositives = 0
    for number in array:
        if number > 0:
            numberPositives += 1
    array[len(array)-1] = numberPositives
    return array

def sumTotal(array):
    sum = 0
    for number in array:
        sum += number
    return sum

def average(array):
    sum = 0
    for number in array:
        sum += number
    return sum/len(array)

def length(array):
    return len(array)

def minimum(array):
    if len(array) < 1:
        return False
    min = array[0]
    for number in array:
        if number < min:
            min = number
    return min

def maximum(array):
    if len(array) < 1:
        return False
    max = array[0]
    for number in array:
        if number > max:
            max = number
    return max

def ultimateAnalyze(array):
    sum = sumTotal(array)
    avg = average(array)
    min = minimum(array)
    max = maximum(array)
    len = length(array)
    dictionary = {
        "sumTotal": sum,
        "average": avg,
        "minimum": min,
        "maximum": max,
        "length": len
    }
    return dictionary

def reverseList(array):
    for index in range(len(array)-1):
        if index < (len(array)-1)/2:
            temp = array[index]
            array[index] = array[len(array)-index-1]
            array[len(array)-index-1] = temp
    return array