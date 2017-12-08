(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const meat = require("./toppings/meat");
const bread = require("./toppings/bread");
const cheese = require("./toppings/cheese");
const veggie = require("./toppings/veggies");
const condiment = require("./toppings/condiments");

const categories = {
  meat: meat,
  bread: bread,
  cheese: cheese,
  veggie: veggie,
  condiment: condiment
};


let chosenToppings = [];
let toppingPrices = [];

function getToppingStats () {
  let toppingType = event.currentTarget.value;
  chosenToppings.push(toppingType);
  console.log("here is the list of toppings", chosenToppings);
  let toppingSelection = event.currentTarget.className;
  let toppingPrice = categories[toppingSelection](toppingType);
  toppingPrices.push(toppingPrice);
  console.log("here is the list of toppings", toppingPrices);
}

// clear toppings if unselected?



function consolidateSelections() {
  let toppingsString = chosenToppings.join("  ");
  console.log(toppingsString);
  let totalPrice = toppingPrices.reduce( (total, num) => { return total + num;});
  console.log(totalPrice);
  let custComm = ["You have Selected", toppingsString, "Your total cost is:", totalPrice];
  printToDom(custComm);
}

function printToDom (statement) {
  let finalOrder = document.getElementById("finalOrder");
  finalOrder.innerHTML = statement.join(" ");
}

module.exports = {getToppingStats, consolidateSelections};
},{"./toppings/bread":3,"./toppings/cheese":4,"./toppings/condiments":5,"./toppings/meat":6,"./toppings/veggies":7}],2:[function(require,module,exports){
"use strict";

const bake = require("./DOMhandler");


var toppingChoice = document.getElementsByTagName("input");
var addBtn = document.getElementById("addToCart");

addBtn.addEventListener("click", bake.consolidateSelections);
for (let i = 0; i < toppingChoice.length; i++) {
    toppingChoice[i].addEventListener("change", bake.getToppingStats);
}

},{"./DOMhandler":1}],3:[function(require,module,exports){
"use strict";

let breadPrices = { baguette: 1.00, sourdough: 1.40, "multi-grain": 1.99 };

const addBread = function(breadSelection) {
    return breadPrices[breadSelection];
};

module.exports =addBread;
},{}],4:[function(require,module,exports){
"use strict";

let cheesePrices = { meunster: 1.00, cheddar: 1.50, provolone: 1.00 };

const addCheese = function(cheeseSelection) {
    return cheesePrices[cheeseSelection];
};

module.exports = addCheese;
},{}],5:[function(require,module,exports){
"use strict";

let condimentPrices = { mustard: 0.50, mayo: 0.50, ketchup: 0.50 };

const addCondiment = function(condimentSelection) {
    return condimentPrices[condimentSelection];
};

module.exports =addCondiment;
},{}],6:[function(require,module,exports){
"use strict";
// if you cannot answer the questions in the example, do not copy and paste it. Know what's going on before you use code you didn't write

// Private variable to store the different meat prices. How is it private?
let meatPrices = { turkey: 0.75, ham: 1.25, none: 0.00 }; //why is one key in quotes but the other isn't?

const addMeat = function(meatSelection) {
  console.log(meatSelection);
    return meatPrices[meatSelection];
  // code that grabs the correct meat price and returns it
};

module.exports =addMeat;
},{}],7:[function(require,module,exports){
"use strict";

let veggiePrices = { tomato: 1.00, spinach: 1.00, cucumber: 0.50 };

const addVeggie = function(veggieSelection) {
    console.log(veggieSelection);
    return veggiePrices[veggieSelection];
};

module.exports =addVeggie;
},{}]},{},[2]);
