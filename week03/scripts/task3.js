/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return Number(number1) + Number(number2)
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    let numOne = document.getElementById('addend1').value;
    let numTwo = document.getElementById('addend2').value;
    let newSum = add(numOne, numTwo);
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    let sum = document.getElementById('sum');
    return document.querySelector('#sum').value = newSum;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttonElement = document.getElementById('addNumbers');
buttonElement.addEventListener("click", addNumbers)
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2){
    return Number(number1) - Number(number2)
}

function subtractNumbers(){
    let numOne = document.getElementById('minuend').value;
    let numTwo = document.getElementById('subtrahend').value;
    let newTotal = subtract(numOne, numTwo);
    return document.querySelector('#difference').value = newTotal
}
const buttonElementSub = document.getElementById('subtractNumbers')
buttonElementSub.addEventListener("click", subtractNumbers)
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2){
    return Number(number1) * Number(number2)
}

function multiplyNumbers(){
    let numOne = document.getElementById('factor1').value;
    let numTwo = document.getElementById('factor2').value;
    let newProduct = multiply(numOne, numTwo);
    return document.querySelector('#product').value = newProduct
}
const buttonElementMult = document.getElementById('multiplyNumbers')
buttonElementMult.addEventListener("click", multiplyNumbers)
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2){
    return Number(number1) / Number(number2)
}

function divideNumbers(){
    let numOne = document.getElementById('dividend').value;
    let numTwo = document.getElementById('divisor').value;
    let newQuotient = divide(numOne, numTwo);
    return document.querySelector('#quotient').value = newQuotient
}
const buttonElementDiv = document.getElementById('divideNumbers');
buttonElementDiv.addEventListener('click', divideNumbers)
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const d = new Date();
// Step 2: Declare a variable to hold the current year
let y = ''
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
y = d.getFullYear()
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = y

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let num25 = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = num25;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
num25odd = num25.filter(aCount => (aCount % 2) > 0);
document.querySelector('#odds').textContent = num25odd;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
num25even = num25.filter(aCountAgain => (aCountAgain % 2) < 1);
document.querySelector('#evens').textContent = num25even;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
num25reduce = num25.reduce((accumulator, aCount) => accumulator += aCount, 0);
document.querySelector('#sumOfArray').textContent = num25reduce;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
num25map = num25.map(aCount => aCount *= 2);
document.querySelector('#multiplied').textContent = num25map
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
num25total = num25map.reduce((accumulator, aCount) => accumulator += aCount, 0);
document.querySelector('#sumOfMultiplied').textContent = num25total;