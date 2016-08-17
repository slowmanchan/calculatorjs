$(document).ready(function() {
  getNumber();
  getOperator();
  $(".container").on("click", ".equals", function() {
    equals(input, operator);
  })
})

var input = [];
var operator = "";
var x1 = 0;
var x2 = 0;

function equals(input, operator) {
  getX2(input);
  switch(operator) {
    case "+":
      add(x1, x2);
      break;
    case "*":
      multiply(x1, x2);
      break;
    case "-":
      subtract(x1, x2);
      break;
    case "/":
      divide(x1, x2);
      break;
    default:
      console.log("invalid selection");
  }
}
function getOperator() {
  $(".container").on("click", ".operator", function() {
    getX1(input);
    operator = $(this).text();
    console.log(operator);
  })
}

function getNumber() {
  $(".container").on("click", ".grid", function() {
    input.push($(this).text());
    console.log();
  })
}
function getX1(input) {
  x1 = input.join().replace(/,/g, '');
  x1 = parseInt(x1);
  console.log(x1);
  input = [];
}
function getX2(input) {
  x2 = input.join().replace(/,/g, '');
  x2 = parseInt(x2);
  console.log(x2);
}
function add(x, y) {
  console.log(x + y)
}
function multiply(x, y) {
  console.log(x * y)
}
function divide(x, y) {
  console.log(x / y)
}
function subtract(x, y) {
  console.log(x - y)
}
