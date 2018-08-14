function problem3(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}