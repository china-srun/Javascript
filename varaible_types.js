function checkScope() {
    var i = 'china';
    if (true) {
        let i = "srun";
        console.log(i)
        console.log(i)
    }
    console.log(i)
}
checkScope();


const a = 5;
console.log(a + 10);

// var can be accessed from anywhere within the code, this can be compared to the global variable

// however, let can only be accessed within the condition or expression

// const is also a type of variable but it is a type of variable that can not be reassigned
// for example, if we declare const a = 5, then a will always be assinged as 5 and if we were to 
// reassigned a to 10 then it will throw an error

