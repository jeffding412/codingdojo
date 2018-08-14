function one() {
    var hello;
    console.log(hello);                                   
    hello = 'world';                                 
}

function two() {
    var needle;
    needle = 'haystack';
    test();
    function test() {
        var needle;
        needle = 'magnet';
        console.log(needle);
    }
}

function three() {
    
}

two()
  
