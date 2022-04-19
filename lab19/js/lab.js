/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   04.18.2022
 * License: Public Domain
 **/
/**
 // When a user clicks the button
 $("#activate").click(getAjax);

// Using the core $.ajax() method
function getAjax() {
 $.ajax({
     // The URL for the request
     url: "http://numbersapi.com/random/year",
     // The data to send (will be converted to a query string)
     data: { id: 123},
     // Whether this is a POST or GET request
     type: "GET",
 })

 // If the request succeeds
 .done(function( data ) {
     alert("Success!");
    console.log(data);
    // Insert the output in the output div
    $("#output").prepend("<p>" + data);
 })
 // If the request fails
 .fail(function( xhr, status, errorThrown ) {
     console.log(errorThrown + " Status:" + status );
 });
}**/

var url = "https://api.nasa.gov/planetary/apod";
var apiKey = "Wcjdq71katscBPNTBFVCJhDgjVxdqZlTCSD7YXB4";

// When a user clicks the button
$("#activate").click(getAjax);

// use a jQuery AJAX call to fetch output from the numbers API
function getAjax() {
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,
      // The data to send (will be converted to a query string)
      data: {
      	api_key: apiKey,
        count: 1
      },
      // Whether this is a POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function( data ) {
      thisData = data[0];
      console.log(data);
      fullUrl = thisData.url;
      // Insert the output in the output div

      $("#output").html("<h3>" + thisData.title);
      $("#output").append("<img src=" + fullUrl + ">");
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}
