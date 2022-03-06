/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.06.2022
 * License: Public Domain
 **/

// find all of the elements
 // find the button element
 buttonEl = document.getElementById("my-button");
 console.log("button element:", buttonEl);
 // find the form element
 inputEl = document.getElementById("user-name");
 console.log("input element:", inputEl);
 // find output element
 outputEl = document.getElementById("output");
 console.log("output element:", outputEl);

// function asks for user name --> Then sorts letters of user input
 function sortUserName() {
   // prompt asks user for name
   var userName = inputEl.value;
   console.log("userName: ", userName);
   // split string into array
   var nameArray = userName.split('');
   console.log("nameArray: ", nameArray);
   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort: ", nameArraySort);
   // join array back into string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted: ", nameSorted);
   return nameSorted;
 };

// add an event listener to button
 buttonEl.addEventListener("click", function(){
   // modify input value with sortUserName function
   var newName = sortUserName();
   // replace the html in <div id=output> with the results
   outputEl.innerHTML = "Your new name: " + sortUserName();
 });
