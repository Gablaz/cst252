/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.12.2022
 * License: Public Domain
 **/

 //find challenge button and add click handler
 $("#challenge-button").click(function(){
 		//toggle challenge div for text
     $("#challenge").toggleClass("orange");
     $("#challenge").removeClass("purple");
 })

 //find problems button and add click handler
 $("#problems-button").click(function(){
 		//toggle problems div for text
     $("#problems").toggleClass("cursive");
     $("#problems").removeClass("serif");
 })

//find results button and add click handler
 $("#results-button").click(function(){
 		//toggle results div for text
     $("#results").toggleClass("orange");
     $("#results").removeClass("purple");
     $("#results").toggleClass("cursive");
     $("#results").removeClass("serif");
 })
