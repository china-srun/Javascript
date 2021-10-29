// Exercise 01
// console.log("**Hello World! Welcome to KIT Javascript Bootcamp 2020")


// Exercise 02
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Please input your name: ", name => {
//     console.log(`Greetings. ${name} and welcome to the Javascript Bootcamp.`);
//     readline.close();
// })


// Exercise 03
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Input your age: ", age => {
//     if (age >= 18) {
//         console.log("You are eligible to vote.");
//     }
//     else if (age < 0) {
//         console.log("Age must be a positive digit");
//     }
//     else {
//         console.log("You aren't adult yet... Sorry can't vote");
//     }
// })


// Exercise 04
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Input a name: ", name => {
//     readline.question("Input the times: ", times => {
//         if (name == "") {
//             console.log("No name entered")
//         }
//         else {
//             for (let i = 0; i < times; i++) {
//                 console.log(name)
//             }
//         }
//     })
// })


// Exercise 05
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Input a number: ", num => {
//     if (isNaN(num)) {
//         console.log("Not a valid Number");
//     }
//     else {
//         if (num % 2 == 0) {
//             console.log("The number you have entered is Even");
//         }
//         else {
//             console.log("The number you have entered is Odd");
//         }
//     }
// })


// Exercise 06 (*)
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })

// var sum = 0;
// function china(){
//     readline.question('Input: ', answer => {
//         if (answer === 'stop') {
//             console.log(`Sum: ${sum}`)
//             return readline.close()
//         }
//         if (isNaN(answer))
//             console.log("Input must be valid number\n")
//         else
//             sum += Number(answer)
//         china(sum)
//     })
// }
// china()

// Exercise 07
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// var even = 0, odd= 0;
// readline.question("input a number: ", num =>{
//     readline.close();
//     // isNaN = is not a number
//     if (isNaN(num)){
//         console.log("input number dumbass")
//         }
//     else {
//         for (let i = 1; i <= num; i++ ) {
//             if (i % 2 == 0) {
//                 even += i;
//             }
//             else {
//                 odd += i;
//             }
//             }
//         console.log(even);
//         console.log(odd);
//         }
//     }
// )


// Exercise 08
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// var even=0, odd=0, n_even=0, n_odd=0;
// readline.question("input a number: ", num => {
//     if (isNaN(num)) {
//         console.log("Invalid Input");
//     }
//     else {
//         for (let i = 0; i<=num; i++) {
//             if (i%2==0) {
//                 even += i;
//                 avg_even += 1;
//             }
//             else {
//                 odd += i;
//                 avg_odd += 1;
//             }
//         }
//         console.log("average value of even number: ", even / n_even);
//         console.log("average value of odd numbers: ", odd / n_odd);
//     }
// })

// Exercise 09
// var random = Math.floor(Math.random() * 10) + 1;
// console.log(random)

// Exercise 10
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// var res = 0;
// readline.question("Input number: ", userInput => {
//     for (let i = 0; i <= userInput; i++) {
//         var random = Math.floor(Math.random() * 3000) + 2000;
//         var ranInt = parseFloat(random);
//         if (ranInt % 2 == 0) {
//             console.log(ranInt)
//             res += ranInt;
//         }
//     }
//     console.log(res);
// })


// Exercise 11
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a string: ", userInput => {
//     if (userInput == "") {
//         console.log("The string is empty!");
//     }
//     else {
//         console.log(userInput.length);
//     }
// })


// Exercise 12
// const readline = require("readline").createInterface({
//     input : process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a string: ", userInput => {
//     if (userInput == "") {
//         console.log("String entered is empty")
//     }
//     else {
//         var len = userInput.length;
//         var first_half = userInput.slice(0, len/2);
//         var second_half = userInput.slice(len/2, len);
//         console.log(first_half, second_half);
//     }
// })


// Exercise 13
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a string: ", userInput => {
//     if (userInput == "") {
//         console.log("the string is empty")
//     }
//     else {
//         var res = userInput.toLowerCase();
//         console.log(res);
//     }
// })


// Exercise 14
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a string: ", userInput => {
//     if (userInput == "") {
//         console.log("the string in empty")
//     }
//     else {
//         var res = userInput.toUpperCase();
//         console.log(res);
//     }
// })


// Exercise 15
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a string: ", userInput => {
//     if (userInput == "") {
//         console.log("the string is empty")
//     }
//     else {
//         var first_half = userInput.slice(0, (userInput.length)/2);
//         var second_half = userInput.slice((userInput.length)/2, userInput.length);
//         var upper_first = first_half.toUpperCase();
//         var lower_second = second_half.toLowerCase();
//         console.log(upper_first, lower_second)
//     }
// })


// Exercise 16
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("input a string: ", userInput => {
//     if (userInput == "") {
//         console.log("the string is empty");
//     }
//     else {
//         var first_half = userInput.slice(0, userInput.length/2);
//         var second_half = userInput.slice(userInput.length/2, userInput.length);
//         var reverse_first = first_half.split("").reverse().join("");
//         console.log(reverse_first+second_half)
//     }
// })


// Exercise 17
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("input a string: ", userInput => {
//     if (userInput == "") {
//         console.log("string is empty");
//     }
//     else {
//         first = userInput[0];
//         second = userInput[userInput.length-1];
//         console.log(`First character: ${first}`);
//         console.log(`Second character: ${second}`);
//     }
// })


// Exercise 18
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("input a string: ", userInput => {
//     if (userInput == "") {
//         console.log("the string is empty");
//     }
//     else {
//         for (let i=0; i < userInput.length; i++) {
//             console.log(`${userInput[i]}: ${userInput[i].charCodeAt()}`);
//         }
//     }
// })


// Exercise 19
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// var new_str="";
// readline.question("input a string: ", userInput => {
//     if (userInput == "") {
//         console.log("the string is empty")
//     }
//     else {
//         for (let i = 0; i < userInput.length; i++) {
//             if (userInput[i] == userInput[i].toLowerCase()) {
//                 new_str += userInput[i].toUpperCase();
//             }
//             else {
//                 new_str += userInput[i].toLowerCase();
//             }
//         }
//     }
//     console.log(new_str);
// })


// Exercise 20
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Press 1 to encode \nPress 2 to decode: ", op => {
//     switch(op) {
//         case "1": {
//             readline.question("input a string: ", userInput => {
//                 var res = "";
//                 for (let i = 0; i<userInput.length; i++) {
//                     var num = userInput[i].charCodeAt(0);
//                     if (num > 96 && num < 123) {
//                         var num1 = (num + 13-97) % 26 + 97
//                         res+=String.fromCharCode(num1);
//                     }
//                     else if (num > 64 && num < 91) {
//                         var num1 = (num + 13-65) % 26 + 65
//                         res+=String.fromCharCode(num1);
//                     }
//             }
//             console.log(res)
//             })
//         }

//         case "2": {
//             readline.question("input a string: ", userInput => {
//                 var res = "";
//                 for (let i = 0; i<userInput.length; i++) {
//                     var num = userInput[i].charCodeAt(0);
//                     if (num > 96 && num < 123) {
//                         var num1 = (num + (-13-97)) % 26 + 97
//                         res+=String.fromCharCode(num1);
//                     }
//                     else if (num > 64 && num < 91) {
//                         var num1 = (num + (-13-65)) % 26 + 65
//                         res+=String.fromCharCode(num1);
//                     }
//             }
//             console.log(res)
//             })
//         }
//     }
// })


// Exercise 20
// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// function en_de_code(){
//     console.log("Press 1 to encode");
//     console.log("Press 2 to decode");
//     readline.question("Drop your choice: ",answer=>{
//         readline.question("Enter the string to encode",en_answer=>{
//                 var en_string="";
//                 for (x of en_answer){
//                     var plus_num=x.charCodeAt(0);
//                     if (plus_num >64 && plus_num<77 || plus_num>96 && plus_num<109){
//                         new_num=plus_num+13;
//                         en_string += String.fromCharCode(new_num);
        
//                     }
//                     else if (plus_num >76 && plus_num<91 || plus_num>108 && plus_num<123){
//                         new_num=plus_num-13;
//                         en_string += String.fromCharCode(new_num);
                        
//                     }
//                 }
//                 console.log(Encode:${en_string});
//                 readline.question("Do you want to continue? [Y/N]",con_answer=>{
//                     if (con_answer =="Y" || con_answer=="y"){
//                         en_de_code()
//                     }
//                     else if (con_answer=="N"||con_answer=="n"){
//                         console.log("Thanks GoodBye");
//                         return readline.close();
//                     }
//                  })
//         })

//     })
// }
// en_de_code()