function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log(addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);

console.log(minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var sayHello = getGreeting('World');

console.log(sayHello);

function addAndMultiplyby5(num1, num2) {
  return (num1 + num2) * 5;
}

var multiplicationAnswer = addAndMultiplyby5(10, 5);

console.log(multiplicationAnswer);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divisionResult = multiplyAndDivideBy5(35, 10);

console.log(divisionResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractionAnswer = subtractTwoNumbers(22, 7);

console.log(subtractionAnswer);

function getCircleCircumference(radius) {
  return 2 * 3.14159265359 * radius;
}

var circleCircumference = getCircleCircumference(5);

console.log(circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Lamberto', 'Martinez');

console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var formula = cube(5);

console.log(formula);
