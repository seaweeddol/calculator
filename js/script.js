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

    if(result == ''){ // if result is blank
      if(selection != '+' && selection != '-' && selection != 'x' && selection != '/'){ // if selection is not an operator
        result += selection;
        display.textContent = result;
      }
    } else { // if result is not blank
        if(operator == ''){ // if no operator selected yet
          if(selection != '+' && selection != '-' && selection != 'x' && selection != '/'){ // if selection is not an operator
            result += selection;
            display.textContent = result;
          } else { // if selection is operator, update operator to selection
            operator = selection;
          }
        } else { // if operator is not blank
            if(selection != '+' && selection != '-' && selection != 'x' && selection != '/'){ // if selection is not an operator
              num2 += selection;
              display.textContent = num2;
            } else { // if selection is an operator
              result = operate(operator, Number(result), Number(num2));
              display.textContent = result;
              num2 = '';
            }
          }
        }

    // if(selection != '+' || selection != '-' || selection != 'x' || selection != '/'){



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
