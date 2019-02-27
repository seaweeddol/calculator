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

    if(selection == 'C'){
      clear();
    } else if(result == ''){ // if result is blank
        if(selection != '+' && selection != '-' && selection != '*' && selection != '/'){ // if selection is not an operator
          numberSelected(selection);
        }
    } else { // if result is not blank
      if(operator == ''){ // if no operator selected yet
        if(selection != '+' && selection != '-' && selection != '*' && selection != '/'){ // if selection is not an operator
          numberSelected(selection);
        } else { // if selection is operator, update operator to selection
          operator = selection;
        }
      } else { // if operator is not blank
          if(selection != '+' && selection != '-' && selection != '*' && selection != '/'){ // if selection is not an operator
            numberSelected(selection);
          } else { // if selection is an operator
            result = operate(operator, Number(result), Number(num2));
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

function numberSelected(num){
  if(operator == ''){
    result += num;
    display.textContent = result;
  } else{
    num2 += num;
    display.textContent = num2;
  }
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
