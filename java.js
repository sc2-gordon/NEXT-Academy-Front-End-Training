// function getFinalPrice(price, taxPercent) {
//     if (taxPercent === 0) {
//         return price
//     } else if (taxPercent <= 0) {
//         return "Please provide a valid number of tax percentage"
//     } else {
//         return price + (price * taxPercent / 100)
//     }

// }

// const result1 = getFinalPrice(50, 6)


// const result2 = getFinalPrice(25, 10)


// const result3 = getFinalPrice(50, 0)

// const result4 = getFinalPrice(30, -5)



// let num = window.prompt("Please enter a number between 1 and 100:")
// num = parseInt(num)

// function multiples(num) {
//     if (100 >= num && num >= 1) {
//         if (((num % 3) === 0) && ((num % 5) === 0)) {
//             return "FizzBuzz"
//         } else if ((num % 5) === 0) {
//             return "Buzz"
//         } else if ((num % 3) === 0) {
//             return "Fizz"
//         } else {
//             return num
//         }
//     } else if (isNaN(num) == false) {
//         return "Please enter a number between 1 and 100, inclusive of the 1 and 100!!"
//     } else {
//         return "gobbledygook"
//     }
// }

// let results = multiples(num)

// alert(results)



// const names = ['Nicholas', 'Kevin', 'Audrey', 'KJ', 'Delilah', 'Josh']

// for (let i = 0; i < names.length; i++) {
//     document.write("Hello, " + names[i] + "! <br>")

// }

// let index = 0
// let elementLength = names[0].length

// for (let i = 1; i < names.length; i++) {
//     if (names[i].length > elementLength) {
//         index = i
//         elementLength = names(i).length
//     }
// }

// document.write("Longest name is: " + names[index])

// let userInput = prompt("Enter a number between 1 and 10!")
// let answer = Math.floor(Math.random() * 11)

// while (true) {

//     if (answer == userInput) {
//         alert("You have done it!")
//         break
//     } else if (userInput > answer) {
//         alert("Your number is too large!")
//     } else if (userInput < answer) {
//         alert("Your number is too small!")
//     }

//     userInput = prompt("Enter a number between 1 and 10!")
// }

// for (let i=0; i<value.length; i++) {
// document.write(value[i] + " = " + roman[i] + "<br>")
// }


const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let num = 4
let ans = ""


for (let i = 0; i < roman.length; i++) {
    
    if (num >= value[i]) {

        const numOfLetters = Math.floor(num / value[i])

        ans += roman[i].repeat(numOfLetters)
        num = num % value[i]

    }

}

document.write(ans)

