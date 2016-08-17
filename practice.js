$(document).ready(function() {
  getNumber();
  getOperator();
  $(".container").on("click", ".equals", function() {
    equals(input, operator);
  })
})

var input = [];
var operator = "";

function equals(input, operator) {
  switch(operator) {
    case "+":
      add(input[0], input[1]);
      break;
    }
  }
function getOperator() {
  $(".container").on("click", ".operator", function() {
    operator = $(this).text();
    console.log(operator);
  })
}

function getNumber() {
  $(".container").on("click", ".grid", function() {
    input.push($(this).text());
    console.log(input);
  })
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
