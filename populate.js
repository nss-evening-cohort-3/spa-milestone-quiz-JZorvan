"use strict";

var CarLot = (function(originalCarLot) {

  // Take the information from the XHR call and puts it into an array
  originalCarLot.getInventory = function () {
    inventory = JSON.parse(this.responseText);
    // Calls functions to populate the DOM, adding styling and event listeners.
    originalCarLot.pushToDOM(inventory.cars);
    originalCarLot.colorTheBorders(inventory.cars);
    originalCarLot.activateEvents(inventory.cars);
  };

  // XHR call for JSON inventory file
  originalCarLot.loadInventory = function (callback) {
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.addEventListener("load", callback);
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();
  };

  // Loops through the inventory and populates the DOM with info for each car
  originalCarLot.pushToDOM = function (inventory) {
    for (let i = 0; i < inventory.length; i++) {
      let buildString = "";
      buildString += `<car class="col-md-4 col-xs-6 col-sm-4">`
      buildString += `<h3>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</h3>`;
      buildString += `<h3>$${inventory[i].price}</h3>`;
      buildString += `<h5>Color: ${inventory[i].color}</h5>`;

      if (inventory[i].purchased === false) {
        var availability = "Yes"
      } else { availability = "Sold"}

      buildString += `<h5>Available: ${availability}</h5>`;
      buildString += `<h6>Description: ${inventory[i].description}</h6></car>`;
      garage.innerHTML += buildString;
    };
  };

  // Adds styling on each car to match the color of the car
  originalCarLot.colorTheBorders = function () {
    for (let i = 0; i < carCard.length; i++) {
      carCard[i].setAttribute("style", "border: 2px solid " + inventory.cars[i].color);
    };
  };  
     
  return originalCarLot;

})(CarLot || {});