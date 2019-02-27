const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const clearButton = document.querySelector('#clear');
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let result = '';
let num2 = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let selection = button.textContent;

    if(selection == 'C'){ // if clear button is selected, run clear
      clear();
    } else if(selection != '+' && selection != '-' && selection != '*' && selection != '/'){ // if selection is a number
        numberSelected(selection);
    } else { // if selection is an operator
        if(num2 == ''){
          operator = selection;
        } else { // if selection is an operator
          result = operate(operator, Number(result), Number(num2));
          display.textContent = result;
          operator = selection;
          num2 = '';
        }
      }
  })
})

// clear all values and display
function clear(){
  result = '';
  operator = '';
  num2 = '';
  display.textContent = '0';
}

// update result/num2 values and display when number is selected
function numberSelected(num){
  if(operator == ''){
    result += num;
    display.textContent = result;
  } else{
    num2 += num;
    display.textContent = num2;
  }
}

// perform operation depending on what operator user selects
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

// add two numbers together
function add(a, b){
  return a + b;
}

// subtract one number from another
function subtract(a, b){
  return a - b;
}

// multiply two numbers together
function multiply(a, b) {
  return a * b;
}

// divide one number by another
function divide(a, b){
  return a / b;
}
