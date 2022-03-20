/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.19.2022
 * License: Public Domain
 **/

// find button and add click function
$("#my-button").click(function(){
  // declare and assign variables to input and function
  var threeWord = $("#input3").val();
  var fiveWord = $("#input5").val();
  var sevenWord = $("#input7").val();

// print all the numbers from 1 to 200
for (let i = 1; i <= 200; i++) {

  var outputStr = "";
  // If the number is a multiple of 3,
  // print “Fizz” instead of the number.
  if (i % 3 == 0) {
    outputStr += threeWord;
  }

  // If the number is a multiple of 5,
  // print “Buzz” instead of the number.
  if (i % 5 == 0) {
    outputStr += fiveWord;
  }

  // If the number is a multiple of 7,
  // print “Boom” instead of the number.
  if (i % 7 == 0) {
    outputStr += sevenWord;
  }

  //create new DOM and append to output
  if (outputStr != "") {
    $("#output").append("<p>" + outputStr);
  }
  else {
    $("#output").append("<p>" + i);
  }
}

//create new DOM and append to output
if (outputStr == ""){
  $("#output").append(num + "<br>");
}
else {
  $("#output").append(outputStr + "<br>");
}
});
