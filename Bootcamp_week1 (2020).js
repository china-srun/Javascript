// Exercise 01
// console.log("hello world")

// Exercise 02
// console.log("welcome to the Bootcamp\nGood luck and have fun!")


// Exercise 03
//console.log("BOOTCAMP RULES:\n#1 Before getting started read the instructions TWICE!\n#2 IF you have any QUESTIONS... ASK!\n#3 When you create a file: DOUBLE check the filename.\n#4 When you are done with a program: CHECK AND TEST IT AGAIN!\n#5 IF one CHARACTER is different from instructions: YOU FAIL!")


// Exercise 04
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("My name is! What is your name? ", name => {
//     console.log(`Nice to meet you ${name}! Good luck for the Bootcamp!`)
//     readline.close
// })


// Exercise 05
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a number: ", userInput => {
//     if (userInput % 2 == 0) {
//         console.log("EVEN")
//     }
//     else {
//         console.log("ODD")
//     }
// })


// Exercise 06
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     if (userInput == "") {
//         console.log("Nothing to display")
//     }
//     else {
//         var res = userInput[0]
//         console.log(res)
//     }
// })


// Exercise 07
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     if (userInput == "") {
//         console.log("Nothing to display")
//     }
//     else {
//         var res = userInput[userInput.length - 1]
//         console.log(res)
//     }
// })


// Exercise 08
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     if (userInput == "") {
//         console.log("Nothing to display")
//     }
//     else {
//         var res = userInput.toLowerCase()
//         console.log(res)
//     }
// })


// Exercise 09
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     if (userInput == "") {
//         console.log("Nothing to display")
//     }
//     else {
//         var res = userInput.toUpperCase()
//         console.log(res)
//     }
// })


// Exercise 10
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     if (userInput == "") {
//         console.log("Nothing to display")
//     }
//     else {
//         var res = userInput.split("").reverse().join("")
//         console.log(res)
//     }
// })


// Exercise 11
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a number: ", userInput => {
//     for (let i = 0; i < userInput; i++) {
//         console.log("Hello world")
//     }
// })


// Exercise 12
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter a number: ", userInput => {
//     userInput = Number(userInput)
//     for (let i = userInput; i >= 1; i --) {
//         console.log(i)
//     }
//     console.log("BOOM!")
// })


// Exercise 13
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     console.log(userInput.replace("OOP", "Object Orineted Programming").replace("FP", "Functional Programming").replace("AI", "Artificial Intelligence"))
// })


// Exercise 14
// var random = Math.floor(Math.random() * 6 + 1)
// console.log(random)


// Exercise 15
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter a number: ", userInput=> {
//     userInput = Number(userInput)
//     for (let i = 0; i < userInput; i++) {
//         var random = Math.random()
//         if (random > 0.5) {
//             random = 1
//         }
//         else {
//             random = 0
//         }
//     console.log(random)
//     }
// })


// Exercise 16
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter a title: ", userInput => {
//     console.log(`<h1>${userInput}</h1>`)
// })


// Exercise 17
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// var arr = []
// function stop() {
//     readline.question("Enter a sentence: ", userInput =>{
//         if (userInput != "generate") {
//             arr.push(userInput)
//             stop()
//         }
//         else {
//             for (i of arr) {
//                 console.log(`<p>${i}</p>`)
//             }
//             readline.close()
//         }
//     }
// )}
// stop()


// Exercise 18
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question("Enter something: ", userInput => {
//     var arr = []
//     for (i of userInput) {
//         if (i != "#") {
//             arr.push(i)
//         }
//         else {
//             console.log(arr.join(""))
//         }
//     }
// })


// Exercise 19
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline.question("Enter something: ", userInput => {
//     if (userInput.length >= 3) {
//         var first_half = "";
//         var second_half = "";
//         first_half += userInput.slice(0, 2).split("").reverse().join("");
//         second_half += userInput.slice(-2).split("").reverse().join("")
//         console.log(first_half+second_half)
//     }
//     else if (userInput.length == 2) {
//         console.log(userInput + userInput)
//     }
//     else if (userInput.length == 1) {
//         console.log(userInput + userInput + userInput + userInput)
//     }
//     else if (userInput.length == 0) {
//         console.log("0000")
//     }
// })


// Exercise 20
// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// readline.question("Enter something:",st=>{
//      if (st.length==0){
//         console.log("EMPTY");
//     }
//     else{
//         var list_word=''
//         var st_split=st.split(" ").join("");
//         var check_length =st_split.length
//         for (var i=0; i<check_length; i++){
//             for (var x=0; x<i+1; x++){
//                 if (x==0){
//                     list_word+=st_split[i].toUpperCase(st_split[i]);
//                 }
//                 else if (x!=0){
//                     list_word+=st_split[i].toLowerCase(st_split[i]);
//                 }
//             }
//             if(i !=check_length-1){
//                 list_word+='-'
//             }
//         }
//         console.log(list_word);
//     }

// })
