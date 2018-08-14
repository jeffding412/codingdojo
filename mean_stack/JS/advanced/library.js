//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]); // invoking the callback many times... delegation!
    }
}
  
var _ = {
    map: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
        return arr;
    },
    reduce: function(arr, callback, memo) { 
        for (var i = 0; i < arr.length; i++) {
            memo = callback(memo, arr[i]);
        }
        return memo;
    },
    find: function(arr, callback) {   
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },
    filter: function(arr, callback) { 
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function(arr, callback) { 
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}
// you just created a library with 5 methods!
 
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
// [3, 6, 9]

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);
// 6

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even)
// 2

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); // if things are working right, this will return [2,4,6].