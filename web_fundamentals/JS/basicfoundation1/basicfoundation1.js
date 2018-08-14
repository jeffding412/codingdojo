function get1to255() {
    var array = [];
    for (var i = 1; i <= 255; i += 2) {
        array.push(i);
        console.log(i);
    }
    return array;
}

function getEven1000 () {
    var sum = 0;
    for (var i = 2; i <= 1000; i += 2) {
        sum += i;
    }
    return sum;
}

function sumOdd5000() {
    var sum = 0;
    for (var i = 1; i < 5000; i += 2) {
        sum += i;
    }
    return sum;
}

function iterateAnArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function findMax(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function findAverage(array) {
    var avg = 0;
    for (var i = 0; i < array.length; i++) {
        avg += array[i];
    }
    return avg/array.length;
}

function arrayOdd() {
    var array = [];
    for(var i = 1; i < 50; i += 2) {
        array.push(i);
    }
    return array;
}

function greaterThanY(array, Y) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] > Y) {
            count++;
        }
    }
    return count;
}

function squares(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] *= array[i];
    }
    return array;
}

function negatives(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

function minMaxAvg(array) {
    var min = array[0];
    var max = array[0];
    var avg = array[0];
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
        avg += array[i];
    }
    return [max, min, avg/array.length];
}

function swapValues(array) {
    var temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array;
}

function numberToString(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}