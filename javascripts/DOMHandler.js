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