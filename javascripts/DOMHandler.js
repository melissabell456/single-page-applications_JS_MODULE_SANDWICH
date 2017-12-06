"use strict";

const meat = required("./toppings/meat");
const bread = required("./toppings/bread");
const cheese = required("./toppings/cheese");
const veggie = required("./toppings/veggies");
const condiment = required("./toppings/condiments");


var sandwichPrice = 0;

var meatChoice = document.getElementsByClassName("meat");
var cheeseChoice = document.getElementsByClassName("cheese");
var breadChoice = document.getElementsByClassName("bread");
var condimentChoice = document.getElementsByClassName("condiments");
var veggieChoice = document.getElementsByClassName("veggie");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChoice.addEventListener("change", function(event) {
  let selectedMeat = event.target.value;
  return selectedMeat;
}
breadChoice.addEventListener("change", function(event) {
  let selectedBread = event.target.value;
  return selectedBread;
}
cheeseChoice.addEventListener("change", function(event) {
  let selectedCheese = event.target.value;
  return selectedCheese;
}
veggieChoice.addEventListener("change", function(event) {
  let selectedVeggie = event.target.value;
  return selectedVeggie;
}
condimentChoice.addEventListener("change", function(event) {
  let selectedCondiment = event.target.value;
  return selectedCondiment;
}

var finalMeat = meatChoice;
var finalBread = breadChoice;
var finalCheese = cheeseChoice;
var finalVeggie = veggieChoice;
var finalCondiment = condimentChoice;

// Determine the price of the topping chosen

let meatPrice = meat.addMeat.finalMeat;
let breadPrice = bread.addBread.finalBread;
let cheesePrice = cheese.addCheese.finalCheese;
let veggiePrice = veggie.addVeggie.finalVeggie;
let condimentPrice = condiment.addCondiment.finalCondiment;

console.log(meatPrice);
  // Add the price to the total price and update the DOM to display the sandwich cost
});