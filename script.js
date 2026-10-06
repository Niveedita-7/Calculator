function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate() {

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    switch (operator) {

        case "+":
            result = add(num1, num2);
            break;

        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            if (num2 === 0) {
                result = "NOPE! Can't divide by 0";
            } else {
                result = divide(num1, num2);
            }
            break;

        default:
            result = "Invalid operation";
    }

    document.getElementById("result").textContent = result;
}