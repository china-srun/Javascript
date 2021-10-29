// var str = "74";
// str = parseInt(str);
// console.log(str);
// console.log(typeof str);

function convertToInteger(str) {
    return parseInt(str, 2); 
    // 2 refers to the base of the number,
    // in this case it means that 10011 has the base of 2
}
convertToInteger("10011");