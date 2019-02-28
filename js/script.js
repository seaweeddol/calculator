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
    } else if(selection == '<'){
        if(num2 != ''){
          num2 = num2.toString().slice(0, num2.length - 1);
          if(!num2){
            display.textContent = result;
          } else{
            display.textContent = num2;
          }
        } else{
          if(result != ''){
            result = result.toString().slice(0, result.length - 1);
            display.textContent = result;
          } else{
            clear();
          }
        }
    } else if(selection != '+' && selection != '-' && selection != '*' && selection != '/' && selection != '='){ // if selection is a number
        if(isNaN(result)){
          result = '';
        }
        numberSelected(selection);
        enable();
    } else if(selection == '='){
        if(!operator){
          result = '';
        } else {
          result = operate(operator, Number(result), Number(num2));
          display.textContent = result;
          num2 = '';
        }
    } else { // if selection is an operator
      if(num2 == ''){
        operator = selection;
      } else {
          if(!result){
            if(!operator && !num2){
              result = display.textContent;
            }
          }
          result = operate(operator, Number(result), Number(num2));
          if (!result){
            clear();
          } else{
            display.textContent = result;
            operator = selection;
            num2 = '';
          }
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
  if(b == 0){
    disable();
    return display.textContent = 'Cannot divide by zero';
  } else {
    return a / b;
  }
}

function disable(){
  buttons.forEach((button) => {
    let selection = button.textContent;
    if(selection == '+' || selection == '-' || selection == '*' || selection == '/')
      button.setAttribute('disabled', 'disabled');
  })
}

function enable(){
  buttons.forEach((button) => {
    let selection = button.textContent;
    if(selection == '+' || selection == '-' || selection == '*' || selection == '/')
      button.removeAttribute('disabled');
  })
}
