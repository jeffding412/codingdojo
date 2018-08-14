function problem2(array) {
    var min = array[0];
    var max = array[0];
    var average = array[0];
    for (var i = 1; i < array.length; i++) {
        if (min > array[i])
            min = array[i];
        if (max < array[i])
            max = array[i];
        average += array[i];
    }
    console.log(max);
    console.log(min);
    console.log(average/array.length);
}