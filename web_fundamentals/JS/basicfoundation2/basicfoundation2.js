function biggieSize(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array;
}

function printLowReturnHigh(array) {
    var low = array[0];
    var high = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > high) {
            high = array[i];
        }
        if (array[i] < low) {
            low = array[i];
        }
    }
    console.log(low);
    return high;
}

function printOneReturnAnother(array) {
    console.log(array[array.length-2])
    for (var i = 0; i < array.length; i++) {
        if (array[i]%2 == 1 || array[i]%2 == -1)
            return array[i];
    }
}

function doubleVision(array) {
    var newArray = array;
    for (var i = 0; i < newArray.length; i++) {
        newArray[i] *= 2;
    }
    return newArray;
}

function countPositives(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    array[array.length-1] = count;
    return array;
}

function evensAndOdds(array) {
    var currentCountOdd = 0;
    var currentCountEven = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i]%2 == 0 || array[i]%2 == -0) {
            currentCountEven++;
            currentCountOdd = 0;
        }
        if (array[i]%2 == 1 || array[i]%2 == -1) {
            currentCountOdd++;
            currentCountEven = 0;
        }
        if (currentCountOdd >= 3) {
            console.log("That's odd!");
        }
        if (currentCountEven >= 3) {
            console.log("Even more so!");
        }
    }
}

function incrementTheSeconds(arr) {
    for (var i = 1; i < arr.length; i += 2) {
        arr[i]++;
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr;
}

function previousLengths(array) {
    var previousLength = array[0].length;
    for (var i = 1; i < array.length; i++) {
        var currentLength = array[i].length;
        array[i] = previousLength;
        previousLength = currentLength;
    }
    return array;
}

function addSevenToMost(array) {
    var newArray = [];
    for (var i = 1; i< array.length; i++) {
        newArray.push(array[i] + 7);
    }
    return newArray;
}

function reverseArray(array) {
    for (var i = 0; i< array.length/2; i++) {
        var temp = array[i];
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = temp;
    }
    return array;
}

function outlookNegative(array) {
    var newArray = array;
    for (var i = 0; i< array.length; i++) {
        newArray[i] *= -1;
    }
    return newArray;
}

function alwaysHungry(array) {
    var printed = false;
    for (var i = 0; i< array.length; i++) {
        if (array[i] == "food") {
            console.log("yummy");
            printed = true;
        }
    }
    if (!printed) {
        console.log("I'm hungry");
    }
}

function swapTowardTheCenter(array) {
    for (var i = 0; i< array.length/2; i += 2) {
        var temp = array[i];
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = temp;
    }
    return array;
}

function scaleTheArray(array, num) {
    for (var i = 0; i < array.length; i++) {
        array[i] *= num;
    }
    return array;
}