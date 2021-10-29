// Exercise 21
// function greeting(string) {
//     return string;
// }
// console.log(greeting("Hello"))
// console.log(typeof greeting("Hello"))


// Exercise 22
// function grade (res) {
//     if (res >= 90 && res <= 100) {
//         console.log("A")
//     }
//     else if (res >= 80 && res <= 89) {
//         console.log("B")
//     }
//     else if (res >= 70 && res <= 79) {
//         console.log("C")
//     }
//     else if (res >= 60 && res <= 69) {
//         console.log("D")
//     }
//     else if (res >= 0 && res <= 59) {
//         console.log("F")
//     }

// }
// grade(100)


// Exercise 23
// function fun_split(str) {
//     var result = str.split(" ")
//     return result
// }
// console.log(fun_split("Hello world"))


// Exercise 24
// function fun_sort(arr) {
//     console.log(arr.sort());
// }
// fun_sort([1, 2, 6, 4, 9, 6, 4, 5, 8])


// Exercise 25
// function sort_arr(arr) {
//     arr.join("")
//     var trash = []
//     var new_arr = []
//     for (i of arr) {
//         if (new_arr.includes(i)) {
//         trash.push(i)
//         }
//         else {
//             new_arr.push(i)
//         }
//     }
//     return new_arr.sort();
// }
// console.log(sort_arr(["a", "b", "c", "c", "b"]))

// function sort_arr_rev(arr) {
//     arr.join("")
//     var trash = []
//     var new_arr = []
//     for (i of arr) {
//         if (new_arr.includes(i)) {
//         trash.push(i)
//         }
//         else {
//             new_arr.push(i)
//         }
//     }
//     return new_arr.reverse();
// }
// console.log(sort_arr_rev(["a", "b", "c", "c", "b"]))
// console.log(sort_arr_rev([1, 5, 12, 5, 4]))


// Exercise 26
// function find_all(arr, target) {
//     var result = []
//     if (arr.includes(target)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == target) {
//             result.push(i)            
//             }
//         }
//         console.log(result)
//     }
//     else {
//         console.log("None")
//     }
// }
// find_all([ 'A' , 'B' , 'C' , 'C' , 'B' , 'C' , 'C' ], "C")
// find_all ([ 'Hello' ], 'Bye' )

// function find_first (arr, target) {
//     var result = []
//     if (arr.includes(target)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == target) {
//             result.push(i) 
//             break           
//             }
//         }
//         console.log(result)
//     }
//     else {
//         console.log("None")
//     }
// }
// find_first ([ 'A' , 'B' , 'B' , 'B' , 'A' ], 'B' )
// find_first ([ '100' , '100' , '200' , '300' ], '100' )


// Exercise 27
// function odd_even_arr(arr) {
//     var result = [];
//     for (i of arr) {
//         if (i % 2 == 0) {
//             result.push("EVEN")
//         }
//         else {
//             result.push("ODD")
//         }
//     }
//     console.log(result)
// }
// odd_even_arr ([ 1 , 22 , 111 , 444 ])
// odd_even_arr ([ 1 , 2 , 3 , 4 , 555 ])


// Exercise 28
// function arr_number(start, end, op) {
//     var result = [];
//     for (let i = Number(start); i <= Number(end); i++) {
//         result.push(i)
//     }
//     if (op=="False") {
//         console.log(result)
//     }
//     else if (op=="True") {
//         var reversed = result.reverse()
//         console.log(reversed)
//     }
// }
// arr_number ( 1 , 10, "True" )
// arr_number ( 1 , 10, "False" )


// Exercise 29
// function fun_add(num1, num2) {
//     console.log(num1 + num2)
// }
// function fun_sub(num1, num2) {
//      console.log(num1 - num2)
// }
// function fun_mul(num1, num2) {
//     console.log(num1 * num2)
// }
// function fun_div(num1, num2) {
//     console.log(num1 / num2)
// }
// fun_add ( - 1 , 1001 )
// fun_sub ( - 1 , 1001 )
// fun_mul ( 4 , 22 )
// fun_div ( 25 , 5 )


// Exercise 30
// function int_list(arr) {
//     for (element of arr) {
//         if (Number.isInteger(element)) {
//             console.log("True")
//             break
//         }
//         else {
//             console.log("False")
//             break
//         }
//     }
// }
// int_list ([ 100 , 200 , 300, 400, 500 ])
// int_list ([ '100' , '100' , '200' , '300' ])
// int_list ([ 1.5 , 2 , 2.0 ])


// Exercise 31
// function current_time() {
//     var d = new Date();
//     var time = d.toLocaleTimeString();
//     console.log(time)
// }
// current_time()

// function current_date() {
//     var d = new Date();
//     var date = d.toLocaleDateString();
//     console.log(date)
// }
// current_date()


// Exercise 32
// function dict_info(first, last, email, phone) {
//     var my_info= {
//     "firstname":"",
//     "lastname":"",
//     "email":"",
//     "phone":""}
//     my_info["firstname"] = first[0].toUpperCase()+first.slice(1, first.length);
//     my_info["lastname"] = last.toLowerCase();
//     my_info["email"] = email;
//     my_info["phone"] = phone;
//     console.log(my_info)
// }
// dict_info ( "kevin" , "sabbe" , "sabbe.kev@gmail.com" , "+855 16 804 404" )
// dict_info ( " " , " " , " " , " " )


// Exercisen 33
// function dict_users(arr) {
//     var arr_info = []
//     for (let i=0; i<arr.length; i++) {
//         var info = {"username": "", "ID": ""};
//         info["username"] = arr[i];
//         info["ID"] = i+1;
//         arr_info.push(info);
//     }
//     console.log(arr_info)
// }
// dict_users ([ "Akai" , "Roger" , "Fanny" , "Diggie" ])


// Exercise 34
// var info_students = {
//     "username": "sabbe_k",
//     "score": 100,
//     "comments": "Good job!"
// }
// function dict_search(info_students, target) {
//     if (target in info_students) {
//         console.log(info_students[target])  
//     }
//     else {
//         console.log(`ERROR: '${target}' key not found`)
//     }
// }
// dict_search (info_students, "username" )
// dict_search (info_students, "email" )


// Exercise 35
// function dict_shopping(dict) {
//     var res = ""
//     var new_array = [];
//     for (i of dict) {
//         if (i.price < 0.01 || i.quantity <= 0 || Object.keys(i).length<2) {
//             new_array.push("Invalid JSON", 0);
//         }
//         else {
//             res += i.price * i.quantity
//             new_array.push("$"+ res, i.quantity);
//         }
//     }
//     return new_array;
// }

// console.log(dict_shopping([{ "price" : 123.49 , "quantity" : 3 }]));
// console.log(dict_shopping([{ "price" : 19.99 , "quantity" : 3 }, { "price" : 99.99 , "quantity" : 6 }]));
// console.log(dict_shopping([{ "price" : 0.01 , "quantity" : 999 }]));
// console.log(dict_shopping([{ "price" : 123.49 , "quantity" : 0 }]));
// console.log(dict_shopping([{ "price" : -23.49 , "quantity" : 2 }]));
// console.log(dict_shopping([{ "quantity" : 2 }]));
// console.log(dict_shopping([{ "price" : 99.99 }]));


// Exercise 36
// function count(array, target) {
//     var counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == target) {
//             counter ++;
//         }
//     }
//     return counter;
// }

// function dict_count(array) {
//     var new_dict = {};
//     var new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         if (new_array.includes(array[i]) == false) {
//             new_array.push(array[i]);
//         }
//     }
//     for (let j = 0; j < new_array.length; j++) {
//         new_dict[new_array[j]] = count(array, new_array[j]);
//     }
//     return new_dict;
// }

// console.log(dict_count([ 1 , 1 , 1 , 1 , 2 , 2 , 2 , 3 , 3 , 4 , 4 , 5 ]));
// console.log(dict_count([ "hey" , "hi" , "hi" , "hi" ]));
// console.log(dict_count([ "python" , "python" , "c++" ]));


// Exercise 37
// function initials(arr) {
//     var new_arr = []
//     for (i of arr) {
//         new_arr.push(i[0].toUpperCase())
//     }
//     console.log(new_arr)
// }
// initials([ 'World' , 'Wide' , 'Web' ])
// initials([ 'Good' , 'luck' , 'have' , 'fun' ])


// Exercise 38
// function arr_to_arrs (arr) {
//     var new_arr = []
//     for (i of arr) {
//         new_arr.push(i.split("").reverse())
//     }
//     console.log(new_arr)
// }
// arr_to_arrs([ "Hello" ])
// arr_to_arrs([ 'A' , 'a' , 'B' , 'b' ])
// arr_to_arrs([ "hello" , "world" ])


// Exercise 39
function gen_passwords (char, len, num) {
    var res = [];
    while (true) {
        for (let i = 0; i < num; i++) {
            var str = "";
            for (let j = 0; j < len; j++) {
                var randonIndex = Math.floor(Math.random() * len);
                str+=char[randonIndex];
            }
        if (res.length === num){
            break;
        }
        else if (res.includes(str) == false) {
            res.push(str);
        }
    }
    return(res)
    }
} 
console.log(gen_passwords( "abcd" , 4 , 10 ));