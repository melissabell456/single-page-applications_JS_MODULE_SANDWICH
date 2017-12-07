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