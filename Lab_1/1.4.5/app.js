document.getElementById("n").addEventListener('input', calculator);
document.getElementById("m").addEventListener('input', calculator);

function calculator() {
    var inputNumber1 = parseInt(document.getElementById("n").value);
    var inputNumber2 = parseInt(document.getElementById("m").value);
    var operation = document.getElementById("operation").value;

    if (isNaN(inputNumber1) || isNaN(inputNumber2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers";
        return;
    }

    var result = 0;
    switch (operation) {
        case "add":
            result = sum(inputNumber1, inputNumber2);
            break;
        case "subtract":
            result = diff(inputNumber1, inputNumber2);
            break;
        case "multiply":
            result = multiply(inputNumber1, inputNumber2);
            break;
        case "divide":
            result = division(inputNumber1, inputNumber2);
            break;
        default:
            document.getElementById("result").innerHTML = "Please select a valid operation";
            return;
    }
    document.getElementById("result").innerHTML = result;
}

function sum(n, m) {
    return n + m;
}

function diff(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function division(n, m) {
    if (m === 0) {
        return "division with 0 is not possible";
    }
    return n / m;
}