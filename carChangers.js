"use strict";

var CarLot = (function(originalCarLot) {

  // Removes targeted features from car elements
  originalCarLot.removeTargeting = function() {
    // Loops through car elements removing targeted class and resetting borders
    for (let i = 0; i < carCard.length; i++) {
      carCard[i].classList.remove('targeted');
      carCard[i].style.backgroundColor = "white";
      carCard[i].setAttribute("style", "border: 2px solid " + inventory.cars[i].color);
    }
    // Clears the input area, if need be, and places cursor there for immeadiate typing
    textField.value = "";
    textField.focus();
  };

  // Adds targeted styling to a specific car element and then calls the function to change the description
  originalCarLot.addTargeting = function (clickTarget, backgroundColor) {
    clickTarget.classList.add('targeted');
    clickTarget.style.backgroundColor = backgroundColor;
    clickTarget.style.borderWidth = "thick";
    originalCarLot.typeToChange(clickTarget);
  };

  return originalCarLot;

})(CarLot || {});
