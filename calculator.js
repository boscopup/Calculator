// Global variables
let operand1;
let operand2;
let operator;
let displayValue = "0";

changeDisplay(displayValue);
hookUpButtons();

/**
 * Hook up the addEventListener functions for each button
 * @returns nothing
 */
function hookUpButtons() {
    const numberButtons = document.querySelectorAll(".numberButton");
    numberButtons.forEach((btn) => btn.addEventListener("click", handleNumberButton));

    const operatorButtons = document.querySelectorAll(".operatorButton");
    operatorButtons.forEach((btn) => btn.addEventListener("click", handleOperatorButton));

    const actionButtons = document.querySelectorAll(".actionButton");
    actionButtons.forEach((btn) => btn.addEventListener("click", handleActionButton));

    const equalButton = document.querySelector(".equalButton");
    equalButton.addEventListener("click", handleEqualButton);
    return;
}

function changeDisplay() {
    document.querySelector("#entryScreen").textContent = displayValue;
}

/**
 * Performs action based on clicking a number button
 * 0 1 2 3 4 5 6 7 8 9 .
 * @param {Event} e 
 */
function handleNumberButton(e) {
    value = e.target.value;
    console.log(value);

    if (value == ".") {
        // Check to see if a decimal is already displayed
        if (displayValue.includes(".")) {
            // ignore
            return;
        } else {
            displayValue = displayValue + value;
        }
    } else {
        // Check length of current string (limit 10 characters)
        if (displayValue.length == 10) {
            return; // Ignore the number pressed
        } else {
            if (displayValue == "0") {
                // Replace number with new number
                displayValue = value;
            } else {
                // Add the number to the string
                displayValue = displayValue + value;
            }
        }
    }
    changeDisplay();
}

/**
 * Performs action based on clicking an operator button
 * + - * /
 * @param {Event} e 
 */
function handleOperatorButton(e) {
    console.log(e.target.value);
}

/**
 * Performs action based on clicking an action button
 * AC % +/-
 * @param {Event} e 
 */
function handleActionButton(e) {
    console.log(e.target.value);
}

/**
 * Performs action based on clicking the equal button
 * @param {Event} e 
 */
function handleEqualButton(e) {
    console.log(e.target.value);
}

/**
 * Calls the appropriate function based on the operator passed in
 * @param {Number} a 
 * @param {Number} b 
 * @param {String} op 
 * @returns {Number or String} Result or error message
 */
function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            try {
                return divide(a,b);
            } catch (e) {
                return e.message;
            }
    }
}

/**
 * Adds two numbers and returns the sum
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} sum
 */
function add(a, b) {
    return a+b;
}

/**
 * Subtracts two numbers and returns the difference
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} difference
 */
function subtract(a, b) {
    return a-b;
}

/**
 * Multiplies two numbers and returns the product
 * @param {Number} a 
 * @param {*NUmber} b 
 * @returns {Number} product
 */
function multiply(a, b) {
    return a*b;
}

/**
 * Divides two numbers and returns the quotient
 * Throws error if dividing by 0
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} quotient
 */
function divide(a, b) {
    if (b == 0) {
        throw new Error("YOU FOOL!");
    } else {
        return a/b;
    }
}