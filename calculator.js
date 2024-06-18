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
    fitDisplay();
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
    const value = e.target.value;
    console.log(value);

    switch (value) {
        case "clear":
            // Clear the screen
            displayValue = "0";
            break;
        case "percent":
            // Change displayed value to a percent
            if (displayValue == "0") {
                // Ignore it
                return;
            } else {
                let numberValue = parseFloat(displayValue);
                numberValue = numberValue / 100;
                displayValue = numberValue.toString();
            }
            break;
        case "sign":
            if (displayValue[0] == "-") {
                displayValue = displayValue.slice(1);
            } else {
                displayValue = `-${displayValue}`;
            }
            break;
            // Change displayed value to its negation
    }
    changeDisplay();
}

/**
 * Makes the displayed number fit the 10 character size limit
 */
function fitDisplay() {
    // Make sure it fits the 10 character display
    while (displayValue.length > 10) {
        let number = parseFloat(displayValue);
        let precision = 10;
        if (displayValue.includes("e")) {
            let exponentSection = displayValue.slice(displayValue.indexOf("e"));
            precision = precision - exponentSection.length;
        }
        // If the number starts with 0, then it is 0.#####. Calculate how many
        // characters include 0 or . at the beginning (eg, 0.000123) and subtract
        // that amount from precision. The toPrecision function doesn't include
        // leading zeros in its precision.
        if (displayValue[0] == "0" || (displayValue[0] == "-" && displayValue[1] == "0")) {
            let i;
            // If the number is negative, we need to start looping at index 1
            displayValue[0] == "-" ? i = 1 : i = 0;
            while (true) {
                if (displayValue[i] == "0" || displayValue[i] == ".") {
                    precision--;
                    i++;
                } else {
                    break;
                }
            }
        } else if (displayValue.includes(".")) {    // Number doesn't start with 0 but has decimal (eg, 1.2)
            precision--;
        }
        if (displayValue[0] == "-") {
            precision--;
        }
        // Include room for decimal, exponents, negation sign
        number = number.toPrecision(precision);

        // Strip zeros off end if decimal number, eg 1.200000
        if (number.toString().includes(".") && !number.toString().includes("e")) {
            number = parseFloat(number);
        }
        console.log(number);
        displayValue = number.toString(); // -0.0000123460000
    }
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