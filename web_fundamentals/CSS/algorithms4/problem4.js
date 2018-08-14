function problem4(array, start, end) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if (i < start || i > 4) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}