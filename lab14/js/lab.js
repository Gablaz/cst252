/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.19.2022
 * License: Public Domain
 **/

// print all the numbers from 1 to 100
for (let i = 1; i <= 200; i++) {

  var outputStr = "";
  // If the number is a multiple of 3,
  // print “Fizz” instead of the number.
  if (i % 3 == 0) {
    outputStr += "Fizz!";
  }

  // If the number is a multiple of 5,
  // print “Buzz” instead of the number.
  if (i % 5 == 0) {
    outputStr += "Buzz!";
  }

  // If the number is a multiple of 7,
  // print “Boom” instead of the number.
  if (i % 7 == 0) {
    outputStr += "Boom!";
  }

  if (outputStr != "") {
    $("#output").append("<p>" + outputStr);
  }

  else {
    $("#output").append("<p>" + i);
  }
}

if (outputStr == ""){
  $("#output").append(num + "<br>");
}

else {
  $("#output").append(outputStr + "<br>");
}
