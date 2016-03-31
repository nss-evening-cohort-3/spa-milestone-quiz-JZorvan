"use strict";

var CarLot = (function(originalCarLot) {

  // Loops through car elements on the DOM adding event listeners
  originalCarLot.activateEvents = function () {
    for (let i = 0; i < carCard.length; i++) {
      carCard[i].addEventListener("click", function (e) {
        // Sets the target of the click to be the nearest car element
        let clickTarget = e.target.closest("car");
        // Calls click events  
        originalCarLot.removeTargeting();
        originalCarLot.addTargeting(clickTarget);
      });
    };
  };

  // Add an event listener to the text input causing the 'description' area of the selected car to be replaced, on each keystroke, by the user's input
  originalCarLot.typeToChange = function () {
    textField.addEventListener("keyup", function changeDesc(e) {
      // Grabs the selected car element using the class assigned to selected car
      let targetedCar = document.getElementsByClassName("targeted")[0];
      // Throws an alert if the user has not selected a car
      if (targetedCar === undefined) {
        alert("Please select a car to edit.");
      }
      // Gets the proper element from the selected car and inputs the text input value
      if (targetedCar !== undefined) {
        carDesc = targetedCar.getElementsByTagName("h6")[0];
        carDesc.innerHTML = "Description: " + textField.value;
      };
    });
  };

  return originalCarLot;

})(CarLot || {});