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
    } else if(selection == '<'){ // if backspace is selected
        if(num2 != ''){ // if num2 is not blank, remove one character from num2
          num2 = num2.toString().slice(0, num2.length - 1);
          if(num2 == ''){ // then, if num2 is blank, show result value
            updateDisplay(result);
          } else { // if num2 is not blank after removing one char, display num2
            updateDisplay(num2);
          }
        } else { // if num2 is blank, remove one char from result
          result = result.toString();
          result = result.slice(0, result.length - 1);
          if(result == ''){ // then, if result is blank, run clear()
            clear();
          } else { // else, display result
            updateDisplay(result);
          }
        }
    } else if(selection != '+' && selection != '-' && selection != '*' && selection != '/' && selection != '=' && selection != '.' && selection != '+/-'){ // if selection is a number
        if(isNaN(result)){ // if result is NaN, set to blank and enable operators
          result = '';
          enable();
        }
        numberSelected(selection);
    } else if(selection == '.'){
        if(num2 != ''){ // if num2 is not blank, convert to string
          num2 = num2.toString();
          if(num2.includes('.')){ // if num2 already has a decimal, set selection to blank
            selection = '';
          }
        } else { // else, convert result to string
          result = result.toString();
          if(result.includes('.')){ // if result already has a decimal, set selection to blank
            selection = '';
          }
        }
      numberSelected(selection); // append selection
    } else if(selection == '='){
        if(!operator){
          // result = '';
        } else {
          result = operate(operator, Number(result), Number(num2));
          updateDisplay(result);
          num2 = '';
        }
    } else if(selection == '+/-'){
      toggleSign();
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
            updateDisplay(result);
            operator = selection;
            num2 = '';
          }
      }
    }
  })
})

// clear all values and the display
function clear(){
  result = '';
  operator = '';
  num2 = '';
  display.textContent = '0';
}

function updateDisplay(input){
  return display.textContent = input;
}

// update result/num2 values and the display when a number is selected
function numberSelected(num){
  if(operator == ''){ // if no operator has been selected, append to result
    result += num;
    display.textContent = result;
  } else{ // else, append to num2
    num2 += num;
    display.textContent = num2;
  }
}

// perform operation depending on what operator the user selects
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
  if(b == 0){ // if second number = 0, run disable() and clear() and update display text
    disable();
    clear();
    return display.textContent = 'No division by 0';
  } else {
    return a / b;
  }
}

// disable operators
function disable(){
  buttons.forEach((button) => {
    let selection = button.textContent;
    if(selection == '+' || selection == '-' || selection == '*' || selection == '/')
      button.setAttribute('disabled', 'disabled');
  })
}

// enable operators
function enable(){
  buttons.forEach((button) => {
    let selection = button.textContent;
    if(selection == '+' || selection == '-' || selection == '*' || selection == '/')
      button.removeAttribute('disabled');
  })
}

// toggle number between positive and negative
function toggleSign(){
  if(num2 != ''){ // if num2 is not blank, convert to string
    num2 = num2.toString();
    if(num2.includes('-')){ // if num2 is negative, remove -
      num2 = num2.substring(1);
    } else { // else add -
      num2 = '-' + num2;
    }
    updateDisplay(num2);
  } else { // else, convert result to string
    result = result.toString();
    if(result.includes('-')){ // if result is negative, remove -
      result = result.substring(1);
    } else{ // else add -
      result = '-' + result;
    }
    updateDisplay(result);
  }
}
