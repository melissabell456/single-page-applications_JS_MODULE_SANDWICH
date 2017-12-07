(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log("Lindjhgasked to Dom Handler");
const meat = require("./toppings/meat");
const bread = require("./toppings/bread");
const cheese = require("./toppings/cheese");
const veggie = require("./toppings/veggies");
const condiment = require("./toppings/condiments");


var sandwichPrice = 0;

var meatChoice = document.getElementsByClassName("meat");
var cheeseChoice = document.getElementsByClassName("cheese");
var breadChoice = document.getElementsByClassName("bread");
var condimentChoice = document.getElementsByClassName("condiment");
var veggieChoice = document.getElementsByClassName("veggie");

// meat eventlisteners
for (let i = 0; i < meatChoice.length; i++) {
  meatChoice[i].addEventListener("change", whichMeat);
}

function whichMeat () {
  console.log("you picked meat");
  let selectedMeat = event.currentTarget.value;
  console.log(selectedMeat);
  let meatPrice = meat.addMeat(selectedMeat);
  console.log(meatPrice);
  return [selectedMeat, meatPrice];
}

// cheese eventlisteners
for (let i = 0; i < cheeseChoice.length; i++) {
  cheeseChoice[i].addEventListener("change", whichCheese);
}

function whichCheese () {
  console.log("you picked cheese");
  let selectedCheese = event.currentTarget.value;
  console.log(selectedCheese);
  let cheesePrice = cheese.addCheese(selectedCheese);
  console.log(cheesePrice);
  return [selectedCheese, cheesePrice];
}

// bread
for (let i = 0; i < breadChoice.length; i++) {
  breadChoice[i].addEventListener("change", whichBread);
}

function whichBread () {
  console.log("you picked bread");
  let selectedBread = event.currentTarget.value;
  console.log(selectedBread);
  let breadPrice = bread.addBread(selectedBread);
  console.log(breadPrice);
  return [selectedBread, breadPrice];
}

// condiment
for (let i = 0; i < condimentChoice.length; i++) {
  condimentChoice[i].addEventListener("change", whichCondiment);
}

function whichCondiment () {
  console.log("you picked condiment");
  let selectedCondiment = event.currentTarget.value;
  console.log(selectedCondiment);
  let condimentPrice = condiment.addCondiment(selectedCondiment);
  console.log(condimentPrice);
  return [selectedCondiment, condimentPrice];
}

// veggies
for (let i = 0; i < veggieChoice.length; i++) {
  veggieChoice[i].addEventListener("change", whichVeggie);
}

function whichVeggie () {
  console.log("you picked veggie");
  let selectedVeggie = event.currentTarget.value;
  console.log(selectedVeggie);
  let veggiePrice = veggie.addVeggie(selectedVeggie);
  console.log(veggiePrice);
  return [selectedVeggie, veggiePrice];
}



var finalMeat = meatChoice;
var finalBread = breadChoice;
var finalCheese = cheeseChoice;
var finalVeggie = veggieChoice;
var finalCondiment = condimentChoice;

// Determine the price of the topping chosen

// function getMeatPrice (finalMeat) {
// }
let breadPrice = bread.addBread.finalBread;
let cheesePrice = cheese.addCheese.finalCheese;
let veggiePrice = veggie.addVeggie.finalVeggie;
let condimentPrice = condiment.addCondiment.finalCondiment;


// sandwichPrice = meatPrice + breadPrice + cheesePrice + veggiePrice + condimentPrice; 

  // Add the price to the total price and update the DOM to display the sandwich cost

// module.exports = { getMeatPrice };
},{"./toppings/bread":3,"./toppings/cheese":4,"./toppings/condiments":5,"./toppings/meat":6,"./toppings/veggies":7}],2:[function(require,module,exports){
"use strict";

const bake = require("./DOMhandler");
console.log('hello');

// bake.getMeatPrice();
},{"./DOMhandler":1}],3:[function(require,module,exports){
"use strict";

let breadPrices = { baguette: 1.00, sourdough: 1.40, "multi-grain": 1.99 };

const addBread = function(breadSelection) {
    return breadPrices[breadSelection];
};

module.exports = { addBread };
},{}],4:[function(require,module,exports){
"use strict";

let cheesePrices = { meunster: 1.00, cheddar: 1.50, provolone: 1.00 };

const addCheese = function(cheeseSelection) {
    console.log("hi");
    return cheesePrices[cheeseSelection];
};

module.exports = { addCheese };
},{}],5:[function(require,module,exports){
"use strict";

let condimentPrices = { mustard: 0.50, mayo: 0.50, ketchup: 0.50 };

const addCondiment = function(condimentSelection) {
    return condimentPrices[condimentSelection];
};

module.exports = { addCondiment };
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

module.exports = { addMeat }; //What exactly is being exported here?
},{}],7:[function(require,module,exports){
"use strict";

let veggiePrices = { tomato: 1.00, spinach: 1.00, cucumber: 0.50 };

const addVeggie = function(veggieSelection) {
    console.log(veggieSelection);
    return veggiePrices[veggieSelection];
};

module.exports = { addVeggie };
},{}]},{},[2]);
