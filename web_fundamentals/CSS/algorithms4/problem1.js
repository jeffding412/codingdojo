function problem1(array, Y) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > Y) {
            count++;
        }
    }
    console.log(count);
}