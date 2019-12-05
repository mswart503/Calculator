
  var add = function(number1, number2, number3) {
    return number1 + number2 + number3;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };


$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + number1);  // for debugging
    console.log("2nd number: " + number2);  // for debugging
    console.log("operator: " + operator);  // for debugging
    var result;
    if (operator === "add"){
      result = add(number1, number2);
    } else if (operator === "subtract"){
      result = subtract(number1, number2);
    } else if (operator === "multiply"){
      result = multiply(number1, number2);
    } else if (operator === "divide"){
      result = divide(number1, number2);
    }

    $("#output").text(result);
  });

  $("form#quiz").submit(function() {
    event.preventDefault();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var result = add(question1, question2, question3);
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(result);
    var display;
    if (result > "12"){
      display = "You are Hermione Granger";
    } else if (result >= "7" && result <= "11") {
      display = "You are Harry Potter";
    } else if (result < "6") {
      display = "You are Ron Weasley";
    }
    $("#whoYouAre").text(display);
  });
});
