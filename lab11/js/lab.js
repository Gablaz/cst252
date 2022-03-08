/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.07.2022
 * License: Public Domain
 **/

// create and append button to <div id="output">
$("#output").append("<button id=my-button>Click me!");

// add alert when button is clicked
$("#my-button").click(function(){
  alert("Hello There!");
 })

// style button
$("#my-button").css("background-color", "#99ff9d");
$("#my-button").css("color", "#353b72");
$("#my-button").css("padding", "10px");
