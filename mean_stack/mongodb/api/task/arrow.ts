var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = (x) => {
    return x * x;
};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => {
    return x * y;
}
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}