//pg16
function settingAndSwapping() {
    var myNumber = 42;
    var myName = "Jeff";

    var temp = myName;
    myName = myNumber;
    myNumber = temp;

    console.log(myNumber);
    console.log(myName);
}

function printAndCount() {
    var multiplesOfFive = 0;
    for(var x = 512; x <= 4096; x++) {
        if(x%5 === 0) {
            console.log(x);
            multiplesOfFive++;
        }
    }
    console.log(multiplesOfFive);
}

function printNeg52To1066() {
    for(var x = -52; x <= 1066; x++) {
        console.log(x);
    }
}

function multiplesOfSix() {
    var x = 0;
    while(x <= 60000) {
        if(x%6 === 0) {
            console.log(x);
        }
        x++;
    }
}

function beCheerful() {
    console.log("good morning!");
}
function dontWorryBeHappy() {
    for(var x = 0; x < 98; x++) {
        beCheerful();
    }
}

function countingTheDojoWAy() {
    for(var x = 1; x <= 100; x++) {
        if(x%10 === 0) {
            console.log("CodingDojo");
        }
        else if(x%5 === 0) {
            console.log("Coding");
        }
        else {
            console.log(x);
        }
    }
}

function multiplesOfThreeButNotAll() {
    for(var x = -300; x <= 0; x++) {
        if(x !== -3 && x !== -6 && x%3 === 0) {
            console.log(x);
        }
    }
}

function whatDoYouKnow(incoming) {
    console.log(incoming);
}

function printingIntegersWithWhile() {
    var x = 2000;
    while(x <= 5280) {
        console.log(x);
        x++;
    }
}

function whoaThatSuckersHuge() {
    var sum = 0;
    for(var x = -300000; x <= 300000; x++) {
        if(x%2 !== 0) {
            sum += x;
        }
    } 
    console.log(sum);
}

function youSayItsYourBirthday(input1, input2) {
    if((input1 === 12 || input1 === 28) && (input2 === 28 || input2 === 12)) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}

function countdownByFours() {
    var x = 2016;
    while(x > 0) {
        console.log(x);
        x -= 4;
    }
}

function leapYear(year) {
    if(year%400 === 0) {
        return true;
    }
    else if(year%100 === 0) {
        return false;
    }
    else if(year%4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function flexibleCountdown(lowNum, highNum, mult) {
    for(var x = highNum; x >= lowNum; x--) {
        if(x%mult === 0) {
            console.log(x);
        }
    }
}

function theFinalCountdown(param1, param2, param3, param4) {
    var x = param2;
    while(x <= param3) {
        if(x !== param4 && x%param1 === 0) {
            console.log(x);
        }
        x++;
    }
}

//page20
function countDown(input) {
    var arr = [];
    for(var x = 0; x < input; x++) {
        arr.push(input-x);
    }
}

function printAndReturn(array) {
    console.log(array[0]);
    return array[1];
}

function firstPlusLength(array) {
    return array[0] + array.length;
}

function valuesGreaterThanSecond() {
    var array = [1, 3, 5, 7, 9, 13];
    var numGreater = 0;
    for(var x = 0; x < array.length; x++) {
        if(array[x] > array[1]) {
            numGreater++;
        }
    }
    return numGreater;
}

function valuesGreaterThanSecondGeneralized(array) {
    var newArray = [];
    if(array.length > 1) {
        for(var x = 0; x < array.length; x++) {
            if(array[x] > array[1]) {
                newArray.push(array[x]);
            }
        }
        console.log(newArray.length);
        return newArray;
    }
    return null;
}

function thisLengthThatValue(num1, num2) {
    var array = [];
    for(var x = 0; x < num1; x++) {
        array.push(num2);
    }
    if(num1 === num2) {
        console.log("Jinx!");
    }
    return array;
}

function fitTheFirstValue(array) {
    if(array[0] > array.length) {
        console.log("Too big!");
    }
    else if(array[0] < array.length) {
        console.log("Too small!");
    }
    else {
        console.log("Just right!");
    }
}

function fahrenheitToCelcius(fDegrees) {
    return ((fDegrees-32) * (5/9));
}

function celciusToFahrenheit(cDegrees) {
    return (((9/5)*cDegrees) + 32);
}

//pg.22
function biggieSize(array) {
    for(var x = 0; x < array.length; x++) {
        if(array[x] > 0) {
            array[x] = "big";
        }
    }
    return array;
}

function printLowReturnHigh(array) {
    var lowest = array[0];
    var highest = array[0];

    for(var x = 1; x < array.length; x++) {
        if(array[x] < lowest) {
            lowest = array[x];
        }
        if(array[x] > highest) {
            highest = array[x];
        }
    }
    console.log(lowest);
    return highest;
}

function printOneReturnAnother(array) {
    console.log(array[array.length-2]);
    for(var x = 0; x < array.length; x++) {
        if(array[x]%2 !== 0) {
            return array[x];
        }
    }
}

function doubleVision(array) {
    var newArray = [];
    for(var x = 0; x < array.length; x++) {
        newArray.push(array[x] * 2);
    }
    return newArray;
}

function countPositives(array) {
    var numOfPositives = 0;
    for(var x = 0; x < array.length; x++) {
        if(array[x] > 0) {
            numOfPositives++;
        }
    }
    array[array.length-1] = numOfPositives;
    return array;
}

function evensAndOdds(array) {
    var oddInRow = 0;
    var evenInRow = 0;
    for(var x = 0; x < array.length; x++) {
        if(array[x]%2 === 0) {
            evenInRow++;
            oddInRow = 0;
            if(evenInRow > 2) {
                console.log("Even more so!");
            }
        }
        else {
            oddInRow++;
            evenInRow = 0;
            if(oddInRow > 2) {
                console.log("That's odd!");
            }
        }
    }
}

function incrementTheSeconds(arr) {
    for(var x = 0; x < arr.length; x++) {
        if(x%2 !== 0) {
            arr[x]++;
        }
        console.log(arr[x]);
    }
    return arr;
}

function previousLengths(array) {
    var temp;
    var previousString = array[0];
    for(var x = 1; x < array.length; x++) {
        temp = previousString.length;
        previousString = array[x];
        array[x] = temp;
    }
    return array;
}

function addSevenToMost(array) {
    newArray = [];
    for(var x = 1; x < array.length; x++) {
        newArray.push(array[x]+7);
    }
    return newArray;
}

function reverseArray(array) {
    var temp;
    for(var x = 0; x < array.length/2; x++) {
        temp = array[x];
        array[x] = array[array.length - 1 - x];
        array[array.length - 1 - x] = temp;
    }
    return array;
}

function outlookNegative(array) {
    var newArray = [];
    for(var x = 0; x < array.length; x++) {
        if(array[x] < 0) {
            newArray.push(array[x]);
        }
        else {
            newArray.push(-1* array[x]);
        }
    }
    return newArray;
}

function alwaysHungry(array) {
    var containsFood = false;
    for(var x = 0; x < array.length; x++) {
        if(array[x] === "food") {
            containsFood = true;
            console.log("yummy");
        }
    }
    if(!containsFood) {
        console.log("I'm hungry");
    }
}

function swapTowardTheCenter(array) {
    var temp;
    for(var x = 0; x < array.length/2; x++) {
        if(x%2 === 0) {
            temp = array[x];
            array[x] = array[array.length - 1 - x];
            array[array.length - 1 - x] = temp;
        }
    }
    return array;
}

function scaleTheArray(arr, num) {
    for(var x = 0; x < arr.length; x++) {
        arr[x] *= num;
    }
    return arr;
}