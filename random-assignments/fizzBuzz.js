//use prompt method to let user enter in a number, create a popup box
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//loop from 1 up to the entered number using for loop
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i);
    }
}