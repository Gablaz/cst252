/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.07.2022
 * License: Public Domain
 **/

// create and append buttons to <div id="output">
$("#output").append("<button id=left-button>Click me!");
$("#output").append("<button id=right-button>Click me!");

// when left button is cliked --> right button turns purple
// when left button is clicked --> turns itself back to default green
$("#left-button").click(function(){
  $("#right-button").css("background-color", "#b5b2db");
  $("#left-button").css("background-color", "#99ff9d");
})

// when right button is cliked --> left button turns purple
// when right button is clicked --> turns itself back to default green
$("#right-button").click(function(){
  $("#left-button").css("background-color", "#b5b2db");
  $("#right-button").css("background-color", "#99ff9d");
})

// style left button
$("#left-button").css("background-color", "#99ff9d");
$("#left-button").css("color", "#353b72");
$("#left-button").css("padding", "10px");

// style right button
$("#right-button").css("background-color", "#99ff9d");
$("#right-button").css("color", "#353b72");
$("#right-button").css("padding", "10px");
