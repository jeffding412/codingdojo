function maxMinAvg(array) {
    var min = array[0];
    var max = array[0];
    var average = array[0];
    for(var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
        average += array[i]; 
    }
    average /= array.length;
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + average + "."
}

console.log(maxMinAvg([1, -2, 9, 4]))