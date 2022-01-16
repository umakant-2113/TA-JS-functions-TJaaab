/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(Name) {
  alert(`hello ${Name}`);
}
sayHello("umakant");

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function fullName(firstName, lastName) {
  return firstName + lastName;
}
let msg1 = fullName("john", "snow");
let msg2 = fullName("Nelson", "mandela");
console.log(msg1);
console.log(msg2);

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum, secondNum) {
  if (typeof firstNum === typeof secondNum) {
    alert(`valid number`);
  } else {
    alert(`enter a valid input`);
  }
  return firstNum + secondNum;
}
let msg1 = addTwoNumbers(10, 10);
let msg2 = addTwoNumbers(20, 32);
let msg3 = addTwoNumbers(20, "10");
console.log(msg1);
console.log(msg2);
console.log(msg3);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA, numB, operation) {
  if (typeof numA !== typeof numB) {
    alert(`enter a valid input`);
  } else if (typeof numA === typeof numB && operation.toLowerCase() === "mul") {
    return numA * numB;
  }
}
calc(6, 4, "add");

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year) {
  if (year % 4 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// isLeapYear(year);
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(num) {
  let fac = 1;
  for (let i = 0; i < num; i++) {
    fac = fac * (num - i);
  }
  return fac;
}
console.log(getFactorial(5));
