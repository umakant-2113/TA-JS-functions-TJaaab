// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
// function convertToString(n) {
//   return String(n);
// }
// convertToString(6);
// let x = convertToString(6);
// typeof x

// - Write a Function Expression
let convertTo = function bla(n) {
  return String(n);
};
convertToString(6);

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = n => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = n => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.

*/

// - Write a Function Declaration
function addOne(number) {
  return number + number;
}
addOne(6);

// - Write a Function Expression
let addNumbers = function add(number) {
  return number + number;
};
addNumbers(8);
// - Write an Arrow Function without curly brackets(if possible)
let addNumbers = number => number + number;
addNumbers(10);

// - Write an Arrow Function with curly brackets
let addNumbers = number => {
  return number + number;
};
addNumbers(10);
let sum = addNumbers(10);
typeof sum;

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number) {
  return number - 1;
}
substractOne(6);

// - Write a Function Expression
const sub = function substractOne(number) {
  return number - 1;
};
sub(6);

// - Write an Arrow Function without curly brackets(if possible)
const sub = number => number - 1;
sub(6);
// - Write an Arrow Function with curly brackets
const sub = function (number) {
  return number - 1;
};
sub(6);
// - Execute the function

// - Execute the function and store the return value in a variable.
const sub = function (number) {
  return number - 1;
};
let i = sub(6);
// - What is the typeof returnValue
typeof i;
number;
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a, b) {
  return a + b;
}
sum(6, 4);

// - Write a Function Expression
const addNumbers = function sum(a, b) {
  return a + b;
};
addNumbers(6, 4);

// - Write an Arrow Function without curly brackets(if possible)
const addNumbers = (numA, numB) => numA + numB;
addNumbers(6, 4);

// - Write an Arrow Function with curly brackets
const addNumbers = function (a, b) {
  return a + b;
};
addNumbers(6, 4);

// - Execute the function
addNumbers(6, 4);

// - Execute the function and store the return value in a variable
let sum = addNumbers(6, 4);

// - What is the typeof returnValue
typeof sum; // number  give us

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(a) {
  return a * a;
}
square(6);

// - Write a Function Expression
const getSquare = function square(a) {
  return a * a;
};
getSquare(5);

// - Write an Arrow Function without curly brackets(if possible)
const getSquare = a => a * a;
getSquare(5);
// - Write an Arrow Function with curly brackets
const getSquare = function (a) {
  return a * a;
};
getSquare(5);

// - Execute the function
getSquare(5);

// - Execute the function and store the return value in a variable
let x = getSquare(5);

// - What is the typeof returnValue
typeof x;
//return a number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  if (x > y) {
    return false;
  } else {
    return true;
  }
}
isGreater(5, 4);

// - Write a Function Expression
const greater = function getSquare(x, y) {
  if (x > y) {
    return false;
  } else {
    return true;
  }
};
greater(6, 5);
// - Write an Arrow Function without curly brackets(if possible)
const greater = (x, y) => x > y;

greater(6, 4);
// - Write an Arrow Function with curly brackets
const greater = function (x, y) {
  if (x > y) {
    return false;
  } else {
    return true;
  }
};
greater(3.2);
// - Execute the function
greater(3, 2);
// - Execute the function and store the return value in a variable
let i = greater(3, 2);
// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write an anonymous Function Expression

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
