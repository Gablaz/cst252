/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.14.2022
 * License: Public Domain
 **/

function sortingHat(name) {
  // get length of user's name
  var len = name.length;
  // do a mod 4 to sort into house
  var mod = len % 4;
  // if conditional to set houseStr to house
  var houseStr;
  if (mod == 0) {
    houseStr = "Gryffindor";
  } else if (mod == 1){
    houseStr = "Slytherin";
  } else if (mod == 2){
    houseStr = "Hufflepuff";
  } else if (mod == 3) {
    houseStr = "Ravenclaw";
  }
  // return sorting house text
  return houseStr;
}

// find button and add click function
$("#my-button").click(function(){
  // declare and assign variables to input and function
  var name = $("#input").val()
  var house = sortingHat(name);
  // replace div output with function results
  $("#output").html("Congratulations! You have been sorted into " + house);
});
