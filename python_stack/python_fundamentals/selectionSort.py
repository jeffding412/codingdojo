def selectionSort(array):
    for index in range(len(array)-1):
        minIndex = index
        for unsortedIndex in range(index+1,len(array)):
            if array[minIndex] > array[unsortedIndex]:
                minIndex = unsortedIndex
        array[index], array[minIndex] = array[minIndex], array[index]
    return array

print(selectionSort([15,18,3,8,1]))
