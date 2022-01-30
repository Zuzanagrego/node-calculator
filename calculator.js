//Hi Jason, just venting out a little here, please don't get mad!

var rs = require("readline-sync");
const prompt = require("prompt-sync")({ sigint: true });
var calculation = [];
var operator = false;

while (operator === false) {
  var operation = prompt(
    "What operation would you like to execute? (Choose from: + ; - ; / ; * ) "
  );
  if (
    operation === "+" ||
    operation === "-" ||
    operation === "*" ||
    operation === "/"
  ) {
    console.log("Fiiiiine");
    operator = true;
  } else {
    console.log("That's not a valid executor, I asked:");
  }
}

var first = false;
while (first === false) {
  var firstNumber = prompt("What is your first number? ");
  if (firstNumber.match(/^-?\d+$/)) {
    calculation.push(firstNumber);
    first = true;
  } else {
    console.log("That's not a valid number. Now try again:");
  }
}

var second = false;
while (second === false) {
  var secondNumber = prompt("What is your second number? ");
  if (secondNumber.match(/^-?\d+$/)) {
    calculation.push(secondNumber);
    second = true;
  } else {
    console.log("That's not a valid number, try again:");
  }
}

if (operation === "+") {
  var result = calculation.map(function (x) {
    return parseInt(x, 10);
  });
  var reducer = (accumulator, curr) => accumulator + curr;
} else if (operation === "-") {
  var result = calculation.map(function (x) {
    return parseInt(x, 10);
  });
  var reducer = (accumulator, curr) => accumulator - curr;
} else if (operation === "/") {
  var result = calculation.map(function (x) {
    return parseInt(x, 10);
  });
  var reducer = (accumulator, curr) => accumulator / curr;
} else if (operation === "*") {
  var result = calculation.map(function (x) {
    return parseInt(x, 10);
  });
  var reducer = (accumulator, curr) => accumulator * curr;
}

console.log("The result is:");
console.log(result.reduce(reducer));
console.log("Honestly you could've done this yourself....");
