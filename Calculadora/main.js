var buttons = document.querySelectorAll('button');
var screen = document.querySelector('.pantalla');

let firstNumber = '';
let operator = '';
let secondNumber = '';

function updateScreen(number) {
    screen.value = number;
}

function handleButton(button) {
    if (button.classList.contains('operadores')) {
    handleOperator(button.value);
    } else if (button.classList.contains('all-clear')) {
    clearAll();
    } else if (button.classList.contains('decimal')) {
    addDecimal();
    } else if (button.classList.contains('equal-sign')) {
    calculate();
    } else {
    appendNumber(button.value);
    }
}

function handleOperator(operatorValue) {
    if (operatorValue === 'sqrt') {
    squareRoot();
    } else {
    firstNumber = screen.value;
    operator = operatorValue;
    screen.value = '';
    }
}

function clearAll() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateScreen('');
}

function addDecimal() {
    if (!screen.value.includes('.')) {
    screen.value += '.';
    }
}

function appendNumber(number) {
    screen.value += number;
}

function calculate() {
    secondNumber = screen.value;
    if (operator === '+') {
    updateScreen(parseFloat(firstNumber) + parseFloat(secondNumber));
    } else if (operator === '-') {
    updateScreen(parseFloat(firstNumber) - parseFloat(secondNumber));
    } else if (operator === '*') {
    updateScreen(parseFloat(firstNumber) * parseFloat(secondNumber));
    } else if (operator === '/') {
    updateScreen(parseFloat(firstNumber) / parseFloat(secondNumber));
    } else if (operator === '^') {
    updateScreen(Math.pow(parseFloat(firstNumber), parseFloat(secondNumber)));
    }
}

function squareRoot() {
    updateScreen(Math.sqrt(parseFloat(screen.value)));
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    handleButton(button);
    });
});
