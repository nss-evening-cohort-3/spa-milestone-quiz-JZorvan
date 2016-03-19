"use strict";

var CarLot = (function(originalCarLot) {

    originalCarLot.getInventory = function () {
      var inventory = [];
      inventory = JSON.parse(this.responseText);
      originalCarLot.pushToDOM(inventory.cars);
      originalCarLot.colorTheBorders(inventory.cars);
    },

    originalCarLot.loadInventory = function (callback) {
        
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", callback);
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    },

    originalCarLot.pushToDOM = function (inventory) {
        
      var garage = document.getElementById("car-garage");
      
      for (let i = 0; i < inventory.length; i++) {
        let buildString = "";
        buildString += `<car><h3>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</h3>`;
        buildString += `<h3>$${inventory[i].price}</h3>`;
        buildString += `<h5>Color: ${inventory[i].color}</h5>`;
        buildString += `<h6>Description: ${inventory[i].description}</h6></car>`;
        garage.innerHTML += buildString;
      }
    },

    originalCarLot.colorTheBorders = function (inventory) {
      var carCard = document.getElementsByTagName("car");
      for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].color === "Blue") {
          carCard[i].classList.add("blue-border");
        } else if (inventory[i].color === "Brownish") {
          carCard[i].classList.add("brown-border");
        } else if (inventory[i].color === "Dark Blue") {
          carCard[i].classList.add("darkblue-border")
        }
      };
    };  
    
  
  return originalCarLot;

})(CarLot || {});



// var CarLot = (function () {
//   var inventory = [];

//   return {

//     getInventory: function () {
//       inventory = JSON.parse(this.responseText);
//       console.log("inventory", inventory);
//     },

//     loadInventory: function (callback) {
//       var inventoryLoader = new XMLHttpRequest();

//       inventoryLoader.addEventListener("load", CarLot.getInventory);
//       inventoryLoader.addEventListener("error", function(xhrEvent) {
//         console.log("An error occured while transferring the data");  
//       });

//       inventoryLoader.open("GET", "inventory.json");
//       inventoryLoader.send();
//     }
//   };
// })(CarLot || {});


// var autoData = JSON.parse(this.responseText); 
//   console.log("autoData", autoData);
    
// };

// var inventoryRequest = new XMLHttpRequest();

//   inventoryRequest.addEventListener("load", inventoryRetriever);
//   inventoryRequest.addEventListener("error", executeThisIfXHRFails);

//   inventoryRequest.open("GET", "inventory.json");
//   inventoryRequest.send();