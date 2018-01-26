// var let const 
function f(shouldInitialise) {
    var x;
    if (shouldInitialise) {
        x = 10;
    }
    return x;
}
console.log(f(true));
console.log(f(false));
