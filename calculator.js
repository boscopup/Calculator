// Global variables
let operand1;
let operand2;
let operator;

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