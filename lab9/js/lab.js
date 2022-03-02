/**
 * Author: Gabby Lazarcheff <glazarcheff@csumb.edu>
 * Created:   03.01.2022
 * License: Public Domain
 **/

// Find output <div> and assign outputEl
var outputEl = document.getElementById("output");

// create purple button
var oneEl = document.createElement("button");

  // append purple button to outputEl and assign id
  outputEl.appendChild(oneEl);
  oneEl.id = "purplebutton";

    // stylize purple button
    oneEl.innerHTML = "Click Me";
    oneEl.style.backgroundColor = "#b5b2db";
    oneEl.style.color = "white";
    oneEl.style.fontSize = "30px";
    oneEl.style.margin = "10px";

// create pink button
var twoEl = document.createElement("button");

  // append pink button to outputEl and assign id
  outputEl.appendChild(twoEl);
  twoEl.id = "pinkbutton";

    // stylize pink button
    twoEl.innerHTML = "Click Me";
    twoEl.style.backgroundColor = "#f4b2b4";
    twoEl.style.color = "white";
    twoEl.style.fontSize = "30px";
    twoEl.style.margin = "10px";
