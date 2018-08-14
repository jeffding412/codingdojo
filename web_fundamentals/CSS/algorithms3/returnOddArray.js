function returnOddArray() {
    // your code here
    var array = [];
    for(var i = 1; i <= 255; i += 2) {
        array.push(i);
    }
    return array;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]