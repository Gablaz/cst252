/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   04.04.2022
 * License: Public Domain
 **/

// Create a constructor called "Vehicle"
// Stores "make", "model", "year", "color", and "extras" as parameters
function Vehicle (make, model, year, color, extras) {
 this.make = make;
 this.model = model;
 this.year = year;
 this.color = color;
 this.extras = extras;
 // Add a method info() to constructor
 this.info = function() {
   // return string with information
   return("A " + this.color + " " + this.make + " " + this.model + " made in "+
   this.year + ", it also has a " + this.extras);
 }
}

// create car object and reference info() method
var car = new Vehicle("Volkswagen", "Passat", "2015", "blue", "Star Wars Sticker");
  car.info();
  //append output to output div
  $("#output").append("<p id>" + "Car Info: " + car.info() + "</p>");

// create bike object and reference info() method
var bike = new Vehicle("Specialized", "Mountain Bike", "2004", "pink", "Bell");
  bike.info();
  //append output to output div
  $("#output").append("<p>" + "Bike Info: " + bike.info() + "</p>");
