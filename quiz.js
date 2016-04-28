"use strict";

// Declaring global variables
  var inventory = [];
  var garage = document.getElementById("car-garage");
  var carCard = document.getElementsByTagName("car");
  var textField = document.getElementById("text-field");
  var button = document.getElementsByTagName("button");
  var clickTarget;
  var carDesc;
  // var availablity;

// Main IFFE 
var CarLot = (function () {

  // When the user clicks on the button an alert appears to let the user know that the quiz instructions specified that there be button, but it doesn't actually do anything
  CarLot.uselessButton = function () {
    button[0].addEventListener("click", function() {
      alert("Per the directions, this button doesn't have to do anything.")
    });
  };
  // Call button function and functions from augmenting IFFEs to get the information from the JSON inventory file
  CarLot.uselessButton();
  CarLot.loadInventory(CarLot.getInventory);

})();