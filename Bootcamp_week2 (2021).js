// Exercise 21
// function fun_calc (num1, num2, op) {
//     num1 = Number(num1);
//     num2 = Number(num2);
//     switch (op) {
//         case "+": {
//             return num1 + num2;
//         }
//         case "-": {
//             return num1 - num2;
//         }
//         case "*": {
//             return num1 * num2;
//         }
//         case "/": {
//             return num1 / num2;
//         }
//     }
// }
// console.log(fun_calc(5, 6, "+"));
// console.log(fun_calc(5, 6, "-"));
// console.log(fun_calc(5, 6, "*"));
// console.log(fun_calc(5, 6, "/"));


// Exercise 22
// function fun_split(str) {
//     console.log(str.split(" "))
// }

// fun_split("Hello world welcome to Javascript")


// Exercise 23
// function make_list(par1, par2, par3) {
//     var res = [];
//     res.push(par1, par2, par3)
//     console.log(res);
// }
// make_list(21, "Hello", 45)


// Exercise 24
// function random_array(num) {
//     var array = [];
//     var res = 0;
//     for (let i= 1; i <= num; i++) {
//         var randomNum = Math.floor(Math.random() * 100);
//         array.push(randomNum);
//         res += randomNum;
//         console.log(`Random number ${i}: ${randomNum}`);
//     }
//     console.log(array);
//     console.log(res);
// }
// random_array(5)


// Exercise 25
// function sum_of_array(array) {
//     var res = 0;
//     for (let i of array) {
//         res += i
//     }
//     console.log(res);
// }
// sum_of_array([20, 15, 10, 30])


// Exercise 26
// function search_in_array(array, target) {
//     if (array.includes(target)) {
//         console.log(`Element found at index: ${array.indexOf(target)}`);
//     }
//     else {
//         console.log("Element not found in the array")
//     }
// }
// search_in_array([20, 15, 10, 30], 10)


// Exercise 27
// function mean_of_array(array) {
//     var len = array.length;
//     var sum = 0;
//     for (let i of array) {
//         sum += i;
//         var res = sum / len;
//     }
//     console.log(res);
// }
// mean_of_array([50, 10, 62, 32])


// Exercise 28
// function slice_array(array, target) {
//     console.log(array.slice(target, array.length -2))
// }

// slice_array ([50,10,62,32,64,78,90], 2)


// Exercise 29
// function make_dictionary(list_element,list_word){
//     var list = []
//     for (let i = 0; i < list_element.length; i++) {
//         list.push(`${list_element[i]}: ${list_word[i]}`)
//     }
//     var set = new Set(list)
//     return set
// }
// console.log(make_dictionary([50,10,62],["borey","Thirak","dane"]))


// Exercise 30
// function dict_values(dict) {
//     var key = Object.keys(dict); 
//     var value = Object.values(dict);
//     var new_value = [];
//     var count = 1;

//     for (let i = 0; i < value.length; i++) {
//         new_value.push(value[i]);
//     console.log(`${key[i]}: ${new_value[i]}`);
//     if (count < key.length) {
//         console.log("*********")
//         count++
//     }
//     }
// } 

// dict_values({
//     120: ["Visal", "Borey", "Sovann"],
//     130: ["Hout","Mouyleng", "Pidor"],
//     140: ["Nary", "Misora", "Masaaki"],
// })
