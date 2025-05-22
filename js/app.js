
// Get the display
let display = document.querySelector('.calcText');
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Get the numbers
let oneBtn = document.querySelector('.one');
let twoBtn = document.querySelector('.two');
let threeBtn = document.querySelector('.three');
let fourBtn = document.querySelector('.four');
let fiveBtn = document.querySelector('.five');
let sixBtn = document.querySelector('.six');
let sevenBtn = document.querySelector('.seven');
let eightBtn = document.querySelector('.eight');
let nineBtn = document.querySelector('.nine');
let zeroBtn = document.querySelector('.zero');
let pointBtn = document.querySelector('.point');

// Get the opperations
let addBtn = document.querySelector('.add');
let minusBtn = document.querySelector('.minus');
let multiplyBtn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');

// Click numbers
oneBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '1';
    display.textContent = currentNumber;
});

twoBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '2';
    display.textContent = currentNumber;
});

threeBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '3';
    display.textContent = currentNumber;
});

fourBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '4';
    display.textContent = currentNumber;
});

fiveBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '5';
    display.textContent = currentNumber;
});

sixBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '6';
    display.textContent = currentNumber;
});

sevenBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '7';
    display.textContent = currentNumber;
});

eightBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '8';
    display.textContent = currentNumber;
});

nineBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '9';
    display.textContent = currentNumber;
});

zeroBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '0';
    display.textContent = currentNumber;
});

pointBtn.addEventListener('click', function() {
    currentNumber = currentNumber + '.';
    display.textContent = currentNumber;
});

// Add events for operations
addBtn.addEventListener('click', function() {
    previousNumber = currentNumber;
    operator = '+';
    currentNumber = '';
    display.textContent = operator;
});

minusBtn.addEventListener('click', function() {
    previousNumber = currentNumber;
    operator = '-';
    currentNumber = '';
    display.textContent = operator;
});

multiplyBtn.addEventListener('click', function() {
    previousNumber = currentNumber;
    operator = '*';
    currentNumber = '';
    display.textContent = operator;
});

divideBtn.addEventListener('click', function() {
    previousNumber = currentNumber;
    operator = '/';
    currentNumber = '';
    display.textContent = operator;
});

equalBtn.addEventListener('click', function() {
    var result = 0;
    
    if (operator == '+') {
        result = Number(previousNumber) + Number(currentNumber);
    }
    if (operator == '-') {
        result = Number(previousNumber) - Number(currentNumber);
    }
    if (operator == '*') {
        result = Number(previousNumber) * Number(currentNumber);
    }
    if (operator == '/') {
        result = Number(previousNumber) / Number(currentNumber);
    }
    
    display.textContent = result;
    currentNumber = result;
    previousNumber = '';
    operator = '';
});

clearBtn.addEventListener('click', function() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.textContent = '';
});