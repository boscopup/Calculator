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
        throw new Error("You can't defy the laws of math!");
    } else {
        return a/b;
    }
}