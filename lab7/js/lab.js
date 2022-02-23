/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   02.09.2022
 * License: Public Domain
 **/

// function asks for user name --> Then sorts letters of user input
function sortUserName() {
  //prompt asks user for name
  var userName = window.prompt("Hello there! What is your name so we can sort it?");
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
}

//output
document.writeln("Look at that! We sorted your name: ",
  sortUserName(), "</br>");
