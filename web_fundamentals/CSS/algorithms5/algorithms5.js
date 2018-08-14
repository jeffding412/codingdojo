function resetNegatives(arr) {
    for(var i = 0; i < arr.length; i++) 
        if(arr[i] < 0) 
            arr[i] = 0;
    return arr;
}

function moveForward(arr) {
    for(var i = 0; i < arr.length-1; i++) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr[i] = 0;
    return arr;
}

function returnReversed(arr) {
    for(var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

function repeatTwice(arr) {
    var newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
        newArray.push(arr[i]);
    }
    return newArray;
}