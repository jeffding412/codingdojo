function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function factorial(num) {
    if (num <= 1)
        return num;
    return num * factorial(num-1);
}

function fibonacci(num) {
    if (num == 0) {
        return 0;
    }
    else if (num <= 2) {
        return 1;
    }
    first = 1;
    second = 1;
    for (var i = 3; i < num; i++) {
        var temp = second;
        second += first;
        first = temp;
    }
    return first + second;
}

function arraySecondToLast(array) {
    if(array.length <= 1) {
        return null;
    }

    return array[array.length-2]
}

function arrayNthToLast(array, N) {
    if(array.length-N < 0) {
        return null;
    }

    return array[array.length-N]
}

function arraySecondLargest(array) {
    if (array.length < 2) {
        return null;
    }
    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    var target = array[0];

    if (target == max) {
        target = array[1];
    }

    for (var i = 1; i < array.length; i++) {
        if (target < array[i] && array[i] != max) {
            target = array[i];
        }
    }

    if (target == max) {
        return null;
    }

    return target;
}

function doubleTrouble(array) {
    for(var i = 0; i < array.length; i += 2) {
        array.splice(i, 0, array[i]);
    }
    return array;
}

function Fib(n) {
    if (n == 0)
        return 0;
    if (n <= 2) {
        return 1;
    }
    return Fib(n-2) + Fib(n-1);
}

console.log(Fib(7));