/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   02.09.2022
 * License: Public Domain
 **/

 // Define Variables
var myTransport = ["Volkswagen Passat", "Walking", "Rides from Friends"];

var myMainRide = {
    make: 'Volkswagen',
    model: "Passat",
    color: "Blue",
    year: 2015,
    age: function() {
          return 2022 - year;
    }
};

//output
document.writeln("My Transport: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
