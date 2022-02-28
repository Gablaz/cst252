/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   02.23.2022
 * License: Public Domain
 **/

//function multiplies x by 2
function myFunction(x){
    return (x * 2);
}

//test function to see if it multiplies correctly
console.log("What is 2 multplied by 2?", myFunction(2));
console.log("What is 4 multplied by 2?", myFunction(4));

a = [1200, 4000, 13, 100, 20, 200, 4, 8, 1.5]
console.log("My array", a);

var result = a.map(myFunction);
//should double numbers of array, return: 2400, 8000, 26, 200, 40, 400, 8, 16, 3
console.log("Multiply array by 2: ", result);

var result = a.map(function(x){
    return (x + 2);
})
//should add 2 to each number of the array, return: 1202, 4002, 15, 102, 22, 202, 6, 10, 3.5
console.log("Add 2 to the array: ", result);
