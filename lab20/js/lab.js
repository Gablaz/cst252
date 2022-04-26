/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   04.25.2022
 * License: Public Domain
 **/

 var url = "https://xkcd.com/info.0.json";

 // When a user clicks the button
 $("#activate").click(getAjax);

 // use a jQuery AJAX call to fetch output from the numbers API
 function getAjax() {
   // Using the core $.ajax() method
   $.ajax({
       // The URL for the request
       url: url,
       // The data to send (will be converted to a query string)
       data: { id: 123},
       // Whether this is a POST or GET request
       type: "GET",
   })
   // If the request succeeds
   .done(function( data ) {
       //alert("Success!");
       console.log(data);
       var img = data.img;
       var title = data.title;
       var alt = data.alt;
       // Insert the output in the output div
       // $("#output").html("<pre>" + JSON.stringify(data, null, "\t"));
       $("#output").html("<h2>" + title);
       $("#output").append("<img src=" + img + ">");
       $("#output").append("<p>" + alt);
   })
   // If the request fails
   .fail(function( xhr, status, errorThrown ) {
       console.log(errorThrown + " Status:" + status );
   });
 }
