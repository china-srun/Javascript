// if else condition using ternery condition
function check(a, b) {
    // condition ? statement if true : statement if false
    return a == b ? "the number is equal":"the number is not equal"
}
console.log(check(1, 2));


// using if else if else condition using ternery condition
function checkSign(num) {
    // anything that is in the middle of the ":" sign considered to be a condition
    return num > 0 ? "positive" : num == 0 ? "zero" : "negative";
}
console.log(checkSign(1));



