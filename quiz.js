"use strict";
var CarLot = (function () {

  CarLot.loadInventory(CarLot.getInventory);

})();

  



// console.log("inventory", inventory);



// var CarLot = (function(originalCarLot) { 



// return originalCarLot;

// }(CarLot || {})); 

// CarLot.loadInventory();

// function executeThisIfXHRFails(xhrEvent) {
//   console.log("An error occured while transferring the data");
// };

// function inventoryRetriever() {
//   var autoData = JSON.parse(this.responseText); 
//   console.log("autoData", autoData);
    
// };

// var inventoryRequest = new XMLHttpRequest();

//   inventoryRequest.addEventListener("load", inventoryRetriever);
//   inventoryRequest.addEventListener("error", executeThisIfXHRFails);

//   inventoryRequest.open("GET", "inventory.json");
//   inventoryRequest.send();