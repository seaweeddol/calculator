const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const clearButton = document.querySelector('#clear');
const numButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
let result = '';

numButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    result += button.textContent;
    display.textContent = result;
  })
})

function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b){
  return a / b;
}

function operate(operator, a, b){
  if(operator == '+'){
    return add(a, b);
  } else if(operator == '-'){
    return subtract(a, b);
  } else if(operator == '*'){
    return multiply(a, b);
  } else if(operator == '/'){
    return divide(a, b);
  }
}
