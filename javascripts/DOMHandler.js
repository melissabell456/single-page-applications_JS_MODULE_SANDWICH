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
let toppingChoice = document.getElementsByTagName("input");
let addBtn = document.getElementById("addToCart");

for (let i = 0; i < toppingChoice.length; i++) {
  toppingChoice[i].addEventListener("change", getToppingStats);
}

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

addBtn.addEventListener("click", consolidateSelections);

function consolidateSelections() {
  let toppingsString = chosenToppings.toString("  ");
  console.log(toppingsString);
  let totalPrice = toppingPrices.reduce( (total, num) => { return total + num;});
  console.log(totalPrice);
  let custComm = ["Items Selected:", toppingsString, "Total Cost:", totalPrice];
  printToDom(custComm);
}

function printToDom (statement) {
  let finalOrder = document.getElementById("finalOrder");
  finalOrder.innerHTML = statement.toString(" ");
}
