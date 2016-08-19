$(function() {
  //configuration
  var input = "";
  var operator = "";
  var x1 = 0;
  var x2 = 0;

  //cache DOM
  var $container = $(".container");
  var $answer = $(".answer");

  function equals() {
    $container.on("click", ".equals", function() {
      x2 = parseFloat(input);
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
    clear();
    })
  }
  function getOperator() {
    $container.on("click", ".operator", function() {
      x1 = parseFloat(input);
      input = "";
      operator = $(this).text();
      display(operator);
    })
  }
  function getClear() {
    $container.on("click", ".clear", function() {
      clear();
      display("0");
    })
  }
  function getNumber() {
    $container.on("click", ".grid", function() {
      input += $(this).text();
      display(input);
    })
  }

  function clear() {
    input = "";
    x1 = 0;
    x2 = 0;
    operator = "";
  }
  function display(input) {
    $answer.html(input);
  }
  function add(x, y) {
    display(x + y);
  }
  function multiply(x, y) {
    display(x * y)
  }
  function divide(x, y) {
    display(x / y)
  }
  function subtract(x, y) {
    display(x - y)
  }
  getNumber();
  getOperator();
  equals();
  getClear();
})
