# Calculator
Calculator application built with Javascript.

## Bugs
- ~~Pressing operators consecutively returns 0, infinity, or NaN~~ 2/27/2019
- ~~Dividing by 0 returns infinity~~ 2/27/2019
- ~~If equation equals 0, the next number is added to the string '0', and then replaced by the next number~~ 2/27/2019
- If last button pressed after dividing by zero was =, next number is saved to num2 var instead of result
- If operator is pressed after = when no operator has been selected yet, current number is not saved to result
- If operator is not empty, and operator is pressed after equal sign, last value is used for operate()
